const icon = (className, extraClass = 'h-5 w-5') => [
    '<i class="', className, ' ', extraClass, ' inline-flex shrink-0 items-center justify-center text-center" aria-hidden="true"></i>'
].join('');

const icons = {
    dashboard: icon('fa-solid fa-table-columns'),
    monitoring: icon('fa-solid fa-chart-line'),
    hrps: icon('fa-solid fa-building'),
    bundy: icon('fa-solid fa-clock'),
    qr: icon('fa-solid fa-qrcode'),
    unified: icon('fa-solid fa-layer-group'),
    payroll: icon('fa-solid fa-money-check-dollar'),
    accounting: icon('fa-solid fa-building-columns'),
    errors: icon('fa-solid fa-triangle-exclamation'),
    users: icon('fa-solid fa-users'),
    roles: icon('fa-solid fa-user-shield'),
    audit: icon('fa-solid fa-list-check'),
    settings: icon('fa-solid fa-gear'),
    close: icon('fa-solid fa-xmark', 'h-4 w-4'),
    logout: icon('fa-solid fa-right-from-bracket'),
    user: icon('fa-solid fa-user')
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
