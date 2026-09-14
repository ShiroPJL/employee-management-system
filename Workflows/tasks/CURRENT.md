Use this Codex prompt:

````md
# Task — Refine IT Administrator Dashboard UI

Continue from the **existing IT Administrator Dashboard implementation**.

Do not rebuild the dashboard from scratch.

The current dashboard already has:

- reusable sidebar component
- reusable navbar component
- IT Administrator dashboard content
- integration health table
- summary cards
- Attendance Data Flow
- Synchronization Overview
- Recent Integration Events
- Integration Errors
- responsive sidebar behavior

This task is a focused UI refinement.

---

# Main Fixes

Implement these three changes:

1. Fix the **navbar search input responsiveness/layout**
2. Fix the **Attendance Data Flow / Connected Data Flow responsiveness**
3. Use the existing AU logo from:

```text
/img/aulogo.png
````

for:

* sidebar branding logo
* browser favicon

Do not redesign unrelated dashboard sections.

---

# Existing Structure

Work with the existing project structure.

Expected relevant files:

```text
/
├── admin/
│   ├── dashboard.html
│   └── layout/
│       ├── sidebar.js
│       └── navbar.js
│
├── css/
│   └── admin.css
│
├── js/
│   └── admin-dashboard.js
│
└── img/
    └── aulogo.png
```

Inspect the current implementation first before modifying anything.

Preserve the current component architecture.

---

# 1. Fix Navbar Search Input

The current navbar search field does not adapt cleanly when the available horizontal width becomes smaller.

At some viewport widths or browser zoom levels, the navbar becomes crowded because it contains:

* page title
* subtitle
* search box
* system status
* notification icon
* help icon
* administrator profile

The search input must behave responsively instead of forcing the navbar wider or causing awkward spacing.

## Desktop Layout

For wide desktop screens, keep:

```text
[Page title]    [Search]    [System Status] [Notifications] [Help] [Profile]
```

The page title area should remain readable.

Search should occupy flexible space but have controlled dimensions.

Recommended behavior:

```text
min-width: 0
flex: 1
max-width: around 320–380px
```

Do not use a fixed width that causes overflow.

The navbar's main flex containers should use `min-w-0` where required.

---

# Search Field Visual

Keep the current search styling:

* search icon
* placeholder: `Search dashboard`
* keyboard hint such as `⌘ K` or equivalent
* rounded field
* subtle border
* light gray background
* clear focus state

Do not make the search input unnecessarily large.

---

# Medium Width Behavior

When space becomes limited:

* reduce the search width
* keep System Status visible when practical
* prevent title and controls from overlapping
* prevent horizontal page overflow
* allow the title text area to shrink correctly

At approximately tablet / smaller desktop widths, hide the full search input if necessary and replace it with a compact search icon button.

Example behavior:

```text
Large:
[ Search dashboard                 ]

Medium:
[ Search dashboard ]

Smaller:
[ 🔍 ]
```

Use Tailwind responsive utilities rather than complicated JavaScript.

---

# Mobile Navbar

On mobile:

* do not show the full search input
* use a search icon button only
* keep hamburger/menu button
* page title may become shorter
* hide secondary subtitle if needed
* keep essential notification/profile controls only

The navbar must never create horizontal scrolling.

---

# Navbar Structure

Improve the flex layout if necessary.

Conceptual structure:

```html
<nav>
    <div class="flex items-center ...">
        <div class="min-w-0">
            <!-- title -->
        </div>

        <div class="flex-1 ...">
            <!-- responsive search -->
        </div>

        <div class="shrink-0 ...">
            <!-- system status + actions -->
        </div>
    </div>
</nav>
```

Do not copy this literally if the current component has a better structure.

Preserve the existing visual design.

---

# 2. Fix Connected Data Flow Responsiveness

The **Attendance Data Flow** card currently becomes cramped at narrower widths.

The flow represents:

```text
Attendance Inputs

HRPS
Bundy
QR

↓

Unified Attendance
→ Validation
→ Verified Attendance
→ Existing Payroll
→ Existing Accounting
```

The current design should be preserved conceptually, but the elements must no longer overlap, shrink excessively, or become difficult to read.

---

# Desktop Data Flow

On sufficiently wide screens, show the flow horizontally.

Recommended visual concept:

```text
HRPS ┐
Bundy ├→ Unified Attendance → Validation → Verified Attendance → Existing Payroll → Existing Accounting
QR   ┘
```

Keep:

* HRPS
* Bundy / Biometric
* QR

visually grouped as **Attendance Inputs**.

Then show:

* Unified Attendance
* Validation
* Verified Attendance
* Existing Payroll
* Existing Accounting

Each node should have:

* icon
* short title
* optional short subtitle

Nodes must have consistent widths.

Do not allow node text to overlap arrows.

---

# Important Desktop Fix

The flow should not depend on every item becoming extremely narrow just so all nodes fit.

Use a combination of:

* `min-w-*`
* `shrink-0`
* `gap-*`
* responsive spacing

If there is not enough room, allow the **flow area itself** to scroll horizontally rather than breaking the entire dashboard.

Example concept:

```html
<div class="overflow-x-auto">
    <div class="min-w-max flex ...">
        ...
    </div>
</div>
```

However:

* only the flow contents should scroll
* the full page must not horizontally scroll
* the card title and description should stay fixed
* scrollbar should be subtle

---

# Tablet Layout

At tablet widths, do not squeeze every node into one line.

Use either:

### Option A — Horizontal Scroll

Keep the flow horizontal and make its internal content scrollable.

OR

### Option B — Structured Wrap

Arrange it into two logical rows:

```text
HRPS   Bundy   QR
        ↓

Unified Attendance → Validation → Verified Attendance
                                      ↓
                        Existing Payroll → Existing Accounting
```

Choose whichever fits the existing code more cleanly.

Prioritize readability.

---

# Mobile Layout

On mobile, convert the data flow to a vertical flow.

Example:

```text
Attendance Inputs
      ↓
HRPS
Bundy
QR
      ↓
Unified Attendance
      ↓
Validation
      ↓
Verified Attendance
      ↓
Existing Payroll
      ↓
Existing Accounting
```

Use downward arrows instead of horizontal arrows where appropriate.

Avoid forcing users to read tiny cards.

The mobile layout should fit naturally within the card width.

---

# Preserve Integration Meaning

Do not accidentally change the system architecture.

Correct meaning:

```text
HRPS
+
Bundy / Biometric
+
QR Attendance

→ Unified Attendance
→ Validation
→ Verified Attendance
→ Existing Payroll
→ Existing Accounting
```

Important:

* Existing Payroll remains an external system
* Existing Accounting remains an external system
* HRPS remains an existing external employee-information system
* Bundy/Biometric remains an existing attendance source
* QR Attendance is the project's additional attendance source

Keep the existing note:

> Existing Payroll and Accounting remain external systems; this dashboard monitors their connection health.

You may improve its responsiveness but do not remove its meaning.

---

# 3. Replace Sidebar Placeholder Logo

There is already a real university logo at:

```text
/img/aulogo.png
```

Use this image in the sidebar.

Current placeholder such as:

```text
AU
```

inside a simple square should be removed.

Replace it with the actual image.

Because the page is:

```text
/admin/dashboard.html
```

the browser path can be referenced appropriately, for example:

```text
../img/aulogo.png
```

Verify the actual relative path against the current page before finalizing.

---

# Sidebar Branding

The sidebar branding area should contain:

```text
[AU Logo]  ARELLANO UNIVERSITY
           Juan Sumulong Campus
```

Logo requirements:

* preserve original aspect ratio
* no stretching
* approximately 42–50px visual size on desktop
* `object-contain`
* keep it readable against the navy sidebar
* no excessive white box around it unless the actual logo requires one

Example conceptual markup:

```html
<img
    src="../img/aulogo.png"
    alt="Arellano University Logo"
    class="..."
>
```

Do not use a real-person image.

---

# 4. Add Favicon

Use the same:

```text
/img/aulogo.png
```

as the favicon.

Inside:

```text
admin/dashboard.html
```

add an appropriate favicon link inside `<head>`.

Example:

```html
<link
    rel="icon"
    type="image/png"
    href="../img/aulogo.png"
>
```

Also add:

```html
<link
    rel="apple-touch-icon"
    href="../img/aulogo.png"
>
```

if appropriate.

Do not create another duplicate logo file.

---

# 5. Preserve Current Dashboard Design

Do not redesign:

* summary cards
* Integration Health table
* Recent Integration Events
* error cards
* Synchronization Overview
* current color system
* sidebar overall style
* typography
* spacing system

Only make small adjustments where required for responsive consistency.

The dashboard currently has a good visual direction.

This task is refinement, not redesign.

---

# 6. Browser Zoom / Width Testing

The dashboard should remain usable at common browser zoom levels.

Specifically check layouts similar to:

* 100%
* 90%
* 80%
* 70%

The current screenshots show the dashboard being viewed around **70% browser zoom**, so the layout should still remain balanced there.

Do not implement code specifically targeting browser zoom.

Instead create proper responsive CSS/flex/grid behavior.

---

# 7. Dashboard Grid Responsiveness

While fixing the Data Flow card, make sure its surrounding dashboard grid also behaves properly.

Currently:

```text
Attendance Data Flow | Synchronization Overview
```

Keep this side-by-side on large screens.

Recommended:

```text
Large desktop:
2-column layout

Tablet:
possibly 1-column or weighted responsive columns

Mobile:
1-column
```

Do not make Attendance Data Flow too narrow simply to preserve two columns.

If the width becomes insufficient, stack:

```text
Attendance Data Flow
Synchronization Overview
```

This is preferable to crushed content.

---

# 8. Avoid Horizontal Overflow

Check all affected areas for:

```text
overflow-x
```

The browser page itself should never require horizontal scrolling under normal responsive widths.

Only specific components such as the desktop data-flow rail or large tables may use internal horizontal scrolling where appropriate.

Important containers should use:

```text
min-w-0
max-w-full
overflow-hidden
```

only where appropriate.

Do not blindly apply `overflow-hidden` if it cuts content.

---

# 9. Component Rules

Keep:

```text
admin/layout/sidebar.js
```

responsible for the sidebar UI.

Keep:

```text
admin/layout/navbar.js
```

responsible for the navbar UI.

Do not move the sidebar or navbar markup back into `dashboard.html`.

Keep reusable component functions.

No HTML `fetch()` component loading.

No delayed loading.

No artificial spinner.

The sidebar and navbar must render immediately through the existing ES module architecture.

---

# 10. JavaScript

Do not add JavaScript for responsiveness if CSS/Tailwind can handle it.

JavaScript should remain limited to functionality such as:

* mobile sidebar open/close
* profile dropdown
* search interaction if already supported
* dashboard refresh feedback

Do not introduce resize event listeners merely to control layout.

Use CSS responsive breakpoints.

---

# 11. Tailwind Rules

Continue using Tailwind through the existing CDN.

Do not install Tailwind.

Prefer Tailwind classes for the fixes.

Use `admin.css` only if the behavior cannot be expressed cleanly through Tailwind.

Potential useful utilities include:

```text
min-w-0
shrink-0
flex-1
max-w-full
overflow-x-auto
whitespace-nowrap
hidden
sm:
md:
lg:
xl:
2xl:
```

Choose breakpoints based on the actual existing implementation.

---

# 12. Code Readability

Do not write compressed or one-line code.

Keep:

* imports readable
* template markup formatted
* JavaScript functions readable
* SVG markup organized
* Tailwind class strings understandable
* logical sections commented when useful

Do not rewrite unrelated code.

---

# Acceptance Criteria

The task is complete when:

* `/img/aulogo.png` is shown correctly in the sidebar.
* The AU logo is also used as the browser favicon.
* The old `AU` placeholder branding icon is removed.
* The navbar search does not crowd or overlap other navbar elements.
* Search width adapts gracefully across desktop sizes.
* Smaller screens use a compact search treatment.
* The navbar causes no page-level horizontal overflow.
* Attendance Data Flow remains easy to understand on large screens.
* Data-flow nodes no longer overlap or become unreadably narrow.
* Tablet layouts remain readable.
* Mobile layout becomes vertical or otherwise clearly readable.
* Existing Payroll and Accounting remain clearly labeled as external systems.
* Attendance Data Flow and Synchronization Overview stack when there is insufficient horizontal room.
* Existing dashboard styling is preserved.
* Sidebar/navbar component architecture remains intact.
* No `fetch()`-based layout loading is introduced.
* No new framework or npm dependency is added.
* No unrelated dashboard functionality is changed.

After implementation, briefly report:

1. files changed;
2. navbar search changes;
3. data-flow responsiveness changes;
4. AU logo/favicon changes;
5. any responsive breakpoints or layout decisions introduced.

```
```

## Implementation Result

Status: Completed on 2026-09-14.

Implemented:

- Reworked the navbar search into a flexible desktop field with an icon-only compact control below `xl`, while retaining System Status in compact form until the wider `2xl` layout.
- Made the attendance flow vertical below `2xl`, horizontally scrollable within its card when needed, and fixed node sizing/title wrapping for readable downstream labels.
- Replaced the sidebar `AU` placeholder with `../img/aulogo.png` and added favicon plus Apple touch icon links to the dashboard page.

Verification:

- JavaScript syntax, component rendering, static requirements, duplicate IDs, dependency constraints, whitespace, and CSS brace checks passed.
- Local HTTP checks returned 200 for the page, ES modules, stylesheet, and logo asset.
- `tidy -qe admin/dashboard.html` reported only existing empty decorative `<span>` warnings; no automated browser visual test suite is present.
