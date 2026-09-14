import { Sidebar } from '../admin/layout/sidebar.js';
import { Navbar } from '../admin/layout/navbar.js';

const sidebarRoot = document.getElementById('sidebar-root');
const navbarRoot = document.getElementById('navbar-root');

if (sidebarRoot) {
    sidebarRoot.innerHTML = Sidebar();
}

if (navbarRoot) {
    navbarRoot.innerHTML = Navbar();
}

const sidebarPanel = document.querySelector('[data-sidebar-panel]');
const sidebarOverlay = document.querySelector('[data-sidebar-overlay]');
const sidebarOpenButton = document.querySelector('[data-sidebar-open]');
const sidebarCloseButtons = document.querySelectorAll('[data-sidebar-close]');
const profileButton = document.querySelector('[data-profile-button]');
const profileMenu = document.querySelector('[data-profile-menu]');
const statusLastChecked = document.getElementById('status-last-checked');

function announce(message) {
    if (statusLastChecked) {
        statusLastChecked.textContent = message;
    }
}

function setSidebarOpen(isOpen) {
    if (!sidebarPanel || !sidebarOverlay) {
        return;
    }

    sidebarPanel.classList.toggle('-translate-x-full', !isOpen);
    sidebarPanel.classList.toggle('translate-x-0', isOpen);
    sidebarOverlay.classList.toggle('hidden', !isOpen);
    sidebarOverlay.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('sidebar-is-open', isOpen);

    if (sidebarOpenButton) {
        sidebarOpenButton.setAttribute('aria-expanded', String(isOpen));
    }
}

function setProfileOpen(isOpen) {
    if (!profileButton || !profileMenu) {
        return;
    }

    profileButton.setAttribute('aria-expanded', String(isOpen));
    profileMenu.classList.toggle('hidden', !isOpen);
    profileMenu.hidden = !isOpen;
}

setSidebarOpen(false);

if (sidebarOpenButton) {
    sidebarOpenButton.addEventListener('click', () => setSidebarOpen(true));
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => setSidebarOpen(false));
}

sidebarCloseButtons.forEach((button) => {
    button.addEventListener('click', () => setSidebarOpen(false));
});

document.querySelectorAll('[data-nav-link]').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelectorAll('[data-nav-link]').forEach((navLink) => {
            navLink.classList.remove('is-active');
            navLink.removeAttribute('aria-current');
        });

        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
        setSidebarOpen(false);
    });
});

if (profileButton && profileMenu) {
    profileButton.addEventListener('click', (event) => {
        event.stopPropagation();
        setProfileOpen(profileMenu.hidden);
    });

    document.addEventListener('click', (event) => {
        if (!profileMenu.contains(event.target) && !profileButton.contains(event.target)) {
            setProfileOpen(false);
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setSidebarOpen(false);
        setProfileOpen(false);
    }
});

const refreshButton = document.getElementById('refresh-status');

if (refreshButton) {
    const refreshLabel = refreshButton.querySelector('[data-refresh-label]');
    let resetRefreshFeedback;

    refreshButton.addEventListener('click', () => {
        const checkedAt = new Intl.DateTimeFormat('en', {
            hour: 'numeric',
            minute: '2-digit'
        }).format(new Date());

        refreshButton.classList.add('is-refreshed');

        if (refreshLabel) {
            refreshLabel.textContent = 'Status Refreshed';
        }

        announce('Status refreshed at ' + checkedAt + '.');
        window.clearTimeout(resetRefreshFeedback);
        resetRefreshFeedback = window.setTimeout(() => {
            refreshButton.classList.remove('is-refreshed');

            if (refreshLabel) {
                refreshLabel.textContent = 'Refresh Status';
            }
        }, 1800);
    });
}

document.querySelectorAll('[data-retry-action]').forEach((button) => {
    button.addEventListener('click', () => {
        const integration = button.getAttribute('data-retry-action') || 'integration';
        button.textContent = 'Queued';
        button.disabled = true;
        announce('Retry queued for ' + integration + '. No external request was sent.');
    });
});

document.querySelectorAll('[data-ui-action]').forEach((action) => {
    action.addEventListener('click', () => {
        const actionName = action.getAttribute('data-ui-action') || 'This action';
        announce(actionName.charAt(0).toUpperCase() + actionName.slice(1) + ' is available as a UI-only prototype action.');
    });
});
