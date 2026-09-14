const icon = (content) => [
    '<svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',
    content,
    '</svg>'
].join('');

const icons = {
    dashboard: icon(
        '<rect x="3" y="3" width="7" height="7" rx="1.5"></rect>' +
        '<rect x="14" y="3" width="7" height="7" rx="1.5"></rect>' +
        '<rect x="3" y="14" width="7" height="7" rx="1.5"></rect>' +
        '<rect x="14" y="14" width="7" height="7" rx="1.5"></rect>'
    ),
    monitoring: icon(
        '<path d="M4 5.5h16v13H4z"></path>' +
        '<path d="M7.5 15.5v-3"></path>' +
        '<path d="M12 15.5v-6"></path>' +
        '<path d="M16.5 15.5v-4.5"></path>'
    ),
    hrps: icon(
        '<path d="M4 20.5h16"></path>' +
        '<path d="M6 20.5V8.5h12v12"></path>' +
        '<path d="M8.5 8.5V5.5h7v3"></path>' +
        '<path d="M9 12h1"></path><path d="M14 12h1"></path>' +
        '<path d="M9 15.5h1"></path><path d="M14 15.5h1"></path>'
    ),
    bundy: icon(
        '<circle cx="12" cy="12" r="8.5"></circle>' +
        '<path d="M12 7v5l3.5 2"></path>' +
        '<path d="M7.5 4.5 6 3"></path><path d="M16.5 4.5 18 3"></path>'
    ),
    qr: icon(
        '<path d="M4 4h6v6H4z"></path>' +
        '<path d="M14 4h6v6h-6z"></path>' +
        '<path d="M4 14h6v6H4z"></path>' +
        '<path d="M14 14h2v2h-2z"></path>' +
        '<path d="M18 14h2v2h-2z"></path>' +
        '<path d="M14 18h2v2h-2z"></path>' +
        '<path d="M18 18h2v2h-2z"></path>'
    ),
    unified: icon(
        '<path d="M4 7.5h16"></path><path d="M4 12h16"></path><path d="M4 16.5h16"></path>' +
        '<circle cx="7" cy="7.5" r="1"></circle><circle cx="7" cy="12" r="1"></circle><circle cx="7" cy="16.5" r="1"></circle>'
    ),
    payroll: icon(
        '<rect x="3.5" y="5" width="17" height="14" rx="2"></rect>' +
        '<path d="M3.5 9h17"></path><path d="M7 14h3"></path><path d="M14 14h3"></path>'
    ),
    accounting: icon(
        '<path d="M5 20V6.5L12 3l7 3.5V20"></path>' +
        '<path d="M3.5 20.5h17"></path><path d="M8.5 10.5h1"></path>' +
        '<path d="M14.5 10.5h1"></path><path d="M8.5 14.5h1"></path><path d="M14.5 14.5h1"></path>'
    ),
    errors: icon(
        '<path d="M12 3.5 21 20H3z"></path>' +
        '<path d="M12 9v4"></path><path d="M12 16.5h.01"></path>'
    ),
    users: icon(
        '<path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20"></path>' +
        '<circle cx="9.5" cy="7" r="3.5"></circle>' +
        '<path d="M16 4.5a3.5 3.5 0 0 1 0 6.8"></path>' +
        '<path d="M21 20v-1.5a4 4 0 0 0-3-3.85"></path>'
    ),
    roles: icon(
        '<path d="M12 3.5 19 6v5.5c0 4.2-2.8 7.4-7 9-4.2-1.6-7-4.8-7-9V6z"></path>' +
        '<path d="m9 12 2 2 4-4"></path>'
    ),
    audit: icon(
        '<path d="M6 3.5h9l3 3V20.5H6z"></path>' +
        '<path d="M15 3.5v4h3"></path><path d="M9 12h6"></path>' +
        '<path d="M9 15.5h6"></path>'
    ),
    settings: icon(
        '<path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"></path>' +
        '<path d="m19.4 15 .1.1a1.8 1.8 0 0 1-2.5 2.5l-.1-.1a1.8 1.8 0 0 0-3.1 1.3v.2a1.8 1.8 0 0 1-3.6 0v-.2a1.8 1.8 0 0 0-3.1-1.3l-.1.1a1.8 1.8 0 1 1-2.5-2.5l.1-.1A1.8 1.8 0 0 0 4.3 12a1.8 1.8 0 0 0-1.3-3.1h-.2a1.8 1.8 0 0 1 0-3.6H3A1.8 1.8 0 0 0 4.3 2.2l-.1-.1a1.8 1.8 0 1 1 2.5-2.5l.1.1A1.8 1.8 0 0 0 9.9 0a1.8 1.8 0 0 0 3.6 0v-.2a1.8 1.8 0 0 1 3.6 0V0a1.8 1.8 0 0 0 3.1 1.3l.1-.1a1.8 1.8 0 1 1 2.5 2.5l-.1.1A1.8 1.8 0 0 0 23.9 7h.2a1.8 1.8 0 0 1 0 3.6h-.2a1.8 1.8 0 0 0-1.3 3.1Z" transform="scale(.78) translate(3.4 3.4)"></path>'
    ),
    close: icon('<path d="m6 6 12 12"></path><path d="m18 6-12 12"></path>'),
    logout: icon('<path d="M10 5H6.5A1.5 1.5 0 0 0 5 6.5v11A1.5 1.5 0 0 0 6.5 19H10"></path><path d="M14 8l4 4-4 4"></path><path d="M18 12H9"></path>'),
    user: icon('<circle cx="12" cy="8" r="3.5"></circle><path d="M5 20a7 7 0 0 1 14 0"></path>')
};

const navigationItems = [
    { label: 'Dashboard', href: '#dashboard', icon: icons.dashboard, active: true },
    { label: 'Integration Monitoring', href: '#integration-monitoring', icon: icons.monitoring },
    { label: 'HRPS Integration', href: '#hrps-integration', icon: icons.hrps },
    { label: 'Bundy / Biometric ETL', href: '#bundy-etl', icon: icons.bundy },
    { label: 'QR Attendance', href: '#qr-attendance', icon: icons.qr },
    { label: 'Unified Attendance', href: '#unified-attendance', icon: icons.unified },
    { label: 'Payroll Integration', href: '#payroll-integration', icon: icons.payroll },
    { label: 'Accounting Integration', href: '#accounting-integration', icon: icons.accounting },
    { label: 'Integration Errors', href: '#integration-errors', icon: icons.errors },
    { label: 'User Accounts', href: '#user-accounts', icon: icons.users },
    { label: 'Roles & Permissions', href: '#roles-permissions', icon: icons.roles },
    { label: 'Audit Logs', href: '#audit-logs', icon: icons.audit },
    { label: 'System Settings', href: '#system-settings', icon: icons.settings }
];

function navigationLink(item) {
    const activeClass = item.active ? ' is-active' : '';
    const currentPage = item.active ? ' aria-current="page"' : '';

    return [
        '<a href="', item.href, '" class="sidebar-link', activeClass, '" data-nav-link', currentPage, '>',
        item.icon,
        '<span class="min-w-0 flex-1 truncate">', item.label, '</span>',
        item.active ? '<span class="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true"></span>' : '',
        '</a>'
    ].join('');
}

export function Sidebar() {
    const navigationMarkup = navigationItems.map(navigationLink).join('');

    return [
        '<div id="sidebar-overlay" class="fixed inset-0 z-40 hidden bg-slate-950/60 backdrop-blur-sm lg:hidden" data-sidebar-overlay aria-hidden="true"></div>',
        '<aside id="admin-sidebar" class="sidebar-panel fixed inset-y-0 left-0 z-50 flex w-72 -translate-x-full flex-col bg-au-navy text-white shadow-2xl transition-transform duration-300 ease-out lg:translate-x-0" data-sidebar-panel aria-label="IT Administrator navigation">',
            '<div class="flex min-h-0 flex-1 flex-col">',
                '<div class="flex items-start justify-between border-b border-white/10 px-5 pb-5 pt-6">',
                    '<a href="#dashboard" class="flex min-w-0 items-center gap-3" aria-label="Arellano University dashboard">',
                        '<span class="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-950/10">',
                            '<img class="h-full w-full object-contain p-1" src="../img/aulogo.png" alt="Arellano University logo" />',
                        '</span>',
                        '<span class="min-w-0">',
                            '<span class="block truncate text-[11px] font-extrabold tracking-[0.16em] text-white">ARELLANO UNIVERSITY</span>',
                            '<span class="mt-1 block text-xs font-medium text-blue-100/70">Juan Sumulong Campus</span>',
                        '</span>',
                    '</a>',
                    '<button type="button" class="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-blue-100/70 transition hover:bg-white/10 hover:text-white lg:hidden" data-sidebar-close aria-label="Close navigation menu">',
                        icons.close,
                    '</button>',
                '</div>',
                '<div class="sidebar-scroll min-h-0 flex-1 overflow-y-auto px-4 py-5">',
                    '<div class="mb-4 flex items-center justify-between px-2">',
                        '<span class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100/55">Workspace</span>',
                        '<span class="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-blue-100/70">IT Administrator</span>',
                    '</div>',
                    '<nav class="space-y-1" aria-label="Primary navigation">',
                        navigationMarkup,
                    '</nav>',
                '</div>',
                '<div class="border-t border-white/10 px-4 pb-5 pt-4">',
                    '<div class="rounded-2xl border border-white/10 bg-white/5 p-3.5">',
                        '<div class="flex items-center justify-between gap-3">',
                            '<div class="flex items-center gap-2 text-xs font-semibold text-blue-50">',
                                '<span class="status-dot status-dot-online"></span>',
                                '<span>Integration layer</span>',
                            '</div>',
                            '<span class="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-200">Live</span>',
                        '</div>',
                        '<p class="mt-2 text-[11px] leading-5 text-blue-100/60">Six connected services monitored from one control center.</p>',
                    '</div>',
                    '<div class="mt-4 flex items-center gap-3">',
                        '<span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-blue-100">',
                            icons.user,
                        '</span>',
                        '<div class="min-w-0 flex-1">',
                            '<p class="truncate text-xs font-semibold text-white">IT Administrator</p>',
                            '<p class="mt-0.5 truncate text-[11px] text-blue-100/55">AU-JSC Admin Account</p>',
                        '</div>',
                        '<button type="button" class="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-blue-100/60 transition hover:bg-white/10 hover:text-white" data-ui-action="logout" aria-label="Log out">',
                            icons.logout,
                        '</button>',
                    '</div>',
                    '<button type="button" class="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-xs font-semibold text-blue-100/75 transition hover:border-white/20 hover:bg-white/10 hover:text-white" data-ui-action="logout">',
                        icons.logout,
                        '<span>Logout</span>',
                    '</button>',
                '</div>',
            '</div>',
        '</aside>'
    ].join('');
}
