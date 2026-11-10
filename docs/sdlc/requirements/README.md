# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### EPIC-001 · draft · source: requirements:EPIC-001

Covers the calculator's core arithmetic: addition, subtraction, multiplication, division, percentage, and chaining. Scientific and financial calculations are explicitly excluded.

Epic: Arithmetic Operations. The calculator performs the basic arithmetic operations of a standard phone calculator (add, subtract, multiply, divide, percentage) with a clearly displayed running result. Scientific (trig, logs, powers, parentheses) and financial calculations are out of scope for this version.

**Related:** US-001, US-002, US-003, US-004

### US-001 · draft · source: requirements:US-001

Critical priority story: user can add, subtract, multiply and divide two numbers to get a basic arithmetic result.

As a calculator user, I want to add, subtract, multiply and divide two numbers, so that I can get the result of a basic arithmetic calculation.
- AC-001: After entering first operand + addition operator, entering a second operand and requesting result shows the sum.
- AC-002: Subtraction operator shows first operand minus second operand.
- AC-003: Multiplication operator shows the product.
- AC-004: Division operator (non-zero second operand) shows the quotient.

**Related:** EPIC-001, AC-001, AC-002, AC-003, AC-004

### US-002 · draft · source: requirements:US-002

High priority story: user can apply a percentage function consistent with a standard phone calculator.

As a calculator user, I want to apply the percentage function to a number, so that I can work out percentages like on a standard phone calculator.
- AC-005: Applying percentage to a displayed number updates the display to that number divided by 100.
- AC-006: When a base number and operator are followed by a second value, applying percentage to the second value calculates the percentage against the base number, consistent with standard phone-calculator behaviour.

**Related:** EPIC-001, AC-005, AC-006

### US-003 · draft · source: requirements:US-003

High priority story: user can chain operations using the running result as the next operand, without re-entering intermediate results.

As a calculator user, I want to continue calculating using the running result as the next operand, so that I can perform a sequence of operations without re-entering intermediate results.
- AC-007: After a result is shown, entering another operator and operand and requesting result applies the new operation to the previous result.
- AC-008: Entering a further operator before requesting a result continues the chain using the most recently selected operator.

**Related:** EPIC-001, AC-007, AC-008

### US-004 · draft · source: requirements:US-004

High priority story: user sees a clear divide-by-zero error instead of a confusing numeric result.

As a calculator user, I want a clear error message when I divide by zero, so that I understand the operation is not valid instead of seeing a confusing result.
- AC-009: Dividing by zero shows a clear divide-by-zero error message instead of a numeric result.
- AC-010: Clearing/resetting while an error is shown dismisses the error and returns display to zero.

**Related:** EPIC-001, AC-009, AC-010

### EPIC-002 · draft · source: requirements:EPIC-002

Covers number/operator entry via on-screen buttons and keyboard, decimals, sign toggle, running display, and clear/reset.

Epic: Number Entry and Display. Users enter numbers and operators using either on-screen buttons or the keyboard, including decimals and a positive/negative sign toggle, and always see a clear running result on the display.

**Related:** US-005, US-006, US-007, US-008, US-009, US-010

### US-005 · draft · source: requirements:US-005

Critical priority story: user can tap on-screen buttons for digits and operators to use the calculator with mouse or touchscreen.

As a calculator user, I want to tap on-screen buttons for digits and operators, so that I can use the calculator with a mouse or touchscreen.
- AC-011: Tapping a digit button appends the digit to the current number on the display.
- AC-012: Tapping an operator button selects it and applies it to the current running calculation.

**Related:** EPIC-002, AC-011, AC-012

### US-006 · draft · source: requirements:US-006

High priority story: user can type digits and operators on the keyboard to calculate quickly without on-screen buttons.

As a calculator user, I want to type digits and operators on my keyboard, so that I can calculate quickly without using on-screen buttons.
- AC-013: Pressing a number key appends the corresponding digit to the display.
- AC-014: Pressing an operator key (+, -, *, /, Enter/=) applies the equivalent action as the matching on-screen button.

**Related:** EPIC-002, AC-013, AC-014

### US-007 · draft · source: requirements:US-007

High priority story: user can enter decimal numbers for non-whole-value calculations.

As a calculator user, I want to enter numbers with a decimal point, so that I can calculate with non-whole values.
- AC-015: Adding a decimal point and further digits shows the number with its decimal portion.
- AC-016: Attempting to add a second decimal point is ignored and the number remains valid.

**Related:** EPIC-002, AC-015, AC-016

### US-008 · draft · source: requirements:US-008

Medium priority story: user can toggle the current number between positive and negative.

As a calculator user, I want to switch the current number between positive and negative, so that I can work with negative values.
- AC-017: Using the sign toggle on a positive number makes it negative.
- AC-018: Using the sign toggle on a negative number makes it positive.

**Related:** EPIC-002, AC-017, AC-018

### US-009 · draft · source: requirements:US-009

High priority story: display always clearly shows the current number or running result.

As a calculator user, I want a clear display that always shows the current number or result, so that I can follow my calculation at each step.
- AC-019: As each input is registered, the display updates to show the current number or running result clearly and legibly.

**Related:** EPIC-002, AC-019

### US-010 · draft · source: requirements:US-010

High priority story: user can clear/reset the calculator to start a fresh calculation.

As a calculator user, I want to clear my input and reset the calculator to zero, so that I can start a fresh calculation.
- AC-020: Using the clear/reset control returns the display to zero and discards any in-progress calculation.

**Related:** EPIC-002, AC-020

### EPIC-003 · draft · source: requirements:EPIC-003

Covers open access, cross-device layout, free/no-ads operation, and no persisted history between sessions.

Epic: Access, Platform and Scope. The calculator is a free, open-access, single-user web application that works in desktop and mobile browsers, requires no login or accounts, keeps no data between sessions, and carries no payments, subscriptions or ads.

**Related:** US-011, US-012, US-013, US-014

### US-011 · draft · source: requirements:US-011

Critical priority story: the calculator is usable immediately with no account or login.

As a member of the general public, I want to open and use the calculator without any account or login, so that I can calculate immediately with no barriers.
- AC-021: When the page loads, the calculator is fully usable with no sign-up, login or account required (no accounts or authentication exist in this version).

**Related:** EPIC-003, AC-021

### US-012 · draft · source: requirements:US-012

High priority story: layout works on both desktop and mobile browsers.

As a calculator user, I want a layout that works on both desktop and mobile browsers, so that I can calculate on whichever device I am using.
- AC-022: On desktop, buttons and display are laid out legibly and usable with mouse and keyboard.
- AC-023: On mobile, buttons and display adapt to the smaller screen and are usable by touch.

**Related:** EPIC-003, AC-022, AC-023

### US-013 · draft · source: requirements:US-013

Medium priority story: the calculator is completely free with no ads or payments.

As a calculator user, I want the calculator to be completely free with no ads, so that I can use it without cost or distraction.
- AC-024: No payment, subscription or advertisement is presented at any point (assumption: product is free with no monetization).

**Related:** EPIC-003, AC-024

### US-014 · draft · source: requirements:US-014

Medium priority story: no calculation history persists between sessions; calculator always starts fresh from zero.

As a calculator user, I want no calculation history kept between sessions, so that my calculations are private and the tool stays simple.
- AC-025: Closing the browser or reloading and returning does not restore previous calculation history; the calculator starts from zero (assumption: no persistent data stored beyond the current calculation).

**Related:** EPIC-003, AC-025, NFR-001

### NFR-001 · draft · source: requirements:NFR-001

Privacy: calculations stay in the browser for the session only; nothing leaves the device or persists between sessions.

Calculations stay in the browser for the current session only; nothing is stored between sessions and no calculation data leaves the device, so when the user reloads or returns the calculator starts fresh from zero. Applies to US-014.

**Related:** US-014

### NFR-002 · draft · source: requirements:NFR-002

Compatibility: one codebase works on both desktop and mobile browsers with adaptive layout.

The calculator works in both desktop and mobile browsers from one codebase, with the buttons and display laid out legibly on large screens and adapting to smaller touchscreens. Applies to US-012.

**Related:** US-012

### NFR-003 · draft · source: requirements:NFR-003

Usability: the calculator can be driven entirely by keyboard, mouse, or touch.

The calculator can be driven entirely with the keyboard, the mouse or by touch, so users can enter digits, operators and request results by whichever input suits their device. Applies to US-005, US-006, US-012.

**Related:** US-005, US-006, US-012

### NFR-004 · draft · source: requirements:NFR-004

Usability: display is always clear and legible, updating immediately on each input.

The display always shows the current number or running result clearly and legibly, updating immediately as each input is registered. Applies to US-009.

**Related:** US-009

### REQ-TECH-001 · approved · source: requirements:tech-stack

Technology stack approved by the product owner for this lightweight-scope project (requirements v1).

Backend: FastAPI 0.115 -- serves the calculator page since all work happens client-side; platform default, leaves room for future server-side features.
Cloud: AWS -- hosts the page reliably for general-public traffic worldwide; platform default.
Database: PostgreSQL 16 -- named as platform default but will sit unused, since no accounts or saved data are required.
Frontend: React 19 -- drives the fully client-side button/display interface, one codebase for desktop and mobile. Reviewers should design against exactly this stack without substitution.

### REQ-SCOPE-001 · draft · source: requirements:scope

Explicit out-of-scope items for this version: scientific and financial calculations.

Out of scope -- do not design or build: scientific functions (trig, logarithms, powers, parentheses) and financial calculations. Delivery scope is 'lightweight'; this is requirements version 1.

**Related:** EPIC-001
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-11-10

**Capabilities in scope:** Addition, subtraction, multiplication and division, Percentage calculation, Clear / reset to zero, On-screen button number and operator entry, Keyboard number and operator entry, Chained operations across multiple steps, Decimal number entry, Positive / negative sign toggle, Divide-by-zero error message, Running result display, Desktop and mobile browser layout, Open access with no login or accounts, No calculation history kept between sessions, Free to use with no payments, subscriptions or ads

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | This product does all its work in the browser — there is no login, no saved history, and no data leaving the device — so a backend's only real job is to serve the calculator page to visitors. FastAPI is the platform default and does that reliably for the general-public traffic you expect, while leaving room if you ever add a server-side feature later. |
| cloud | AWS | A free public calculator mainly needs somewhere dependable to host a web page that stays up as visitor numbers rise. AWS is the platform default and comfortably serves a static-feeling single-page app worldwide, so your users on phones and desktops get a fast, always-available page. |
| database | PostgreSQL | You were explicit that nothing is stored between sessions — no accounts, no saved calculations — so this product genuinely needs no database. PostgreSQL is named here as the platform default; it will sit unused unless you later decide to, say, keep usage counts or saved results. |
| frontend | React | Your calculator is entirely a front-end experience: on-screen buttons, keyboard input, chaining operations and showing a divide-by-zero error all happen in the browser with nothing saved between sessions. React handles exactly this kind of interactive button-and-display interface and works the same on desktop and mobile browsers, so one codebase covers both audiences you named. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Arithmetic Operations

The calculator performs the basic arithmetic operations of a standard phone calculator: addition, subtraction, multiplication, division, and percentage, with a clearly displayed running result. Scientific and financial calculations are excluded from this version.

### US-001: Perform addition, subtraction, multiplication and division

**Priority:** critical

> As a calculator user, I want to add, subtract, multiply and divide two numbers, so that I can get the result of a basic arithmetic calculation.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | the first operand and the addition operator have been entered | I enter a second operand and request the result | the display shows the sum of the two operands |
| AC-002 | the first operand and the subtraction operator have been entered | I enter a second operand and request the result | the display shows the first operand minus the second operand |
| AC-003 | the first operand and the multiplication operator have been entered | I enter a second operand and request the result | the display shows the product of the two operands |
| AC-004 | the first operand and the division operator have been entered | I enter a non-zero second operand and request the result | the display shows the first operand divided by the second operand |

### US-002: Calculate a percentage

**Priority:** high

> As a calculator user, I want to apply the percentage function to a number, so that I can work out percentages like on a standard phone calculator.

| ID | Given | When | Then |
|---|---|---|---|
| AC-005 | a number is shown on the display | I apply the percentage function | the display updates to that number interpreted as a percentage (the number divided by 100) |
| AC-006 | a base number and an operator have been entered followed by a second value | I apply the percentage function to the second value and request the result | the percentage is calculated against the base number consistent with standard phone-calculator behaviour |

### US-003: Chain operations across multiple steps

**Priority:** high

> As a calculator user, I want to continue calculating using the running result as the next operand, so that I can perform a sequence of operations without re-entering intermediate results.

| ID | Given | When | Then |
|---|---|---|---|
| AC-007 | a result is shown from a previous operation | I enter another operator and a new operand and request the result | the new operation is applied to the previous result and the updated result is displayed |
| AC-008 | an operand and operator have been entered | I enter a further operator before requesting a result | the calculator continues the chain using the most recently selected operator |

### US-004: See a divide-by-zero error

**Priority:** high

> As a calculator user, I want a clear error message when I divide by zero, so that I understand the operation is not valid instead of seeing a confusing result.

| ID | Given | When | Then |
|---|---|---|---|
| AC-009 | a number and the division operator have been entered | I enter zero as the second operand and request the result | the display shows a clear divide-by-zero error message instead of a numeric result |
| AC-010 | a divide-by-zero error is shown | I clear or reset the calculator | the error is dismissed and the display returns to zero ready for a new calculation |

## EPIC-002: Number Entry and Display

Users enter numbers and operators using either on-screen buttons or the keyboard, including decimals and a positive/negative sign toggle, and always see a clear running result on the display.

### US-005: Enter numbers and operators with on-screen buttons

**Priority:** critical

> As a calculator user, I want to tap on-screen buttons for digits and operators, so that I can use the calculator with a mouse or touchscreen.

| ID | Given | When | Then |
|---|---|---|---|
| AC-011 | the calculator is displayed | I tap a digit button | the corresponding digit is appended to the current number on the display |
| AC-012 | a number is shown on the display | I tap an operator button | the operator is selected and applied to the current running calculation |

### US-006: Enter numbers and operators with the keyboard

**Priority:** high

> As a calculator user, I want to type digits and operators on my keyboard, so that I can calculate quickly without using on-screen buttons.

| ID | Given | When | Then |
|---|---|---|---|
| AC-013 | the calculator is displayed in a browser | I press a number key on the keyboard | the corresponding digit is appended to the current number on the display |
| AC-014 | the calculator is displayed in a browser | I press an operator key (such as +, -, *, / or Enter/=) | the equivalent operator or result action is applied just as the matching on-screen button would |

### US-007: Enter decimal numbers

**Priority:** high

> As a calculator user, I want to enter numbers with a decimal point, so that I can calculate with non-whole values.

| ID | Given | When | Then |
|---|---|---|---|
| AC-015 | a number is being entered | I add a decimal point and further digits | the display shows the number with its decimal portion |
| AC-016 | the current number already contains a decimal point | I attempt to add a second decimal point | no additional decimal point is added and the number remains valid |

### US-008: Toggle the sign of a number

**Priority:** medium

> As a calculator user, I want to switch the current number between positive and negative, so that I can work with negative values.

| ID | Given | When | Then |
|---|---|---|---|
| AC-017 | a positive number is shown on the display | I use the sign toggle | the number becomes negative on the display |
| AC-018 | a negative number is shown on the display | I use the sign toggle | the number becomes positive on the display |

### US-009: See the running result on the display

**Priority:** high

> As a calculator user, I want a clear display that always shows the current number or result, so that I can follow my calculation at each step.

| ID | Given | When | Then |
|---|---|---|---|
| AC-019 | I am entering digits or operators | each input is registered | the display updates to show the current number or running result clearly and legibly |

### US-010: Clear and reset the calculator

**Priority:** high

> As a calculator user, I want to clear my input and reset the calculator to zero, so that I can start a fresh calculation.

| ID | Given | When | Then |
|---|---|---|---|
| AC-020 | a number, operation or error is shown on the display | I use the clear/reset control | the display returns to zero and any in-progress calculation is discarded |

## EPIC-003: Access, Platform and Scope

The calculator is a free, open-access, single-user web application that works in desktop and mobile browsers, requires no login or accounts, keeps no data between sessions, and carries no payments, subscriptions or ads.

### US-011: Use the calculator without logging in

**Priority:** critical

> As a member of the general public, I want to open and use the calculator without any account or login, so that I can calculate immediately with no barriers.

| ID | Given | When | Then |
|---|---|---|---|
| AC-021 | I navigate to the calculator in a browser | the page loads | the calculator is fully usable with no sign-up, login or account required (this version has no user accounts or authentication) |

### US-012: Use the calculator on desktop and mobile browsers

**Priority:** high

> As a calculator user, I want a layout that works on both desktop and mobile browsers, so that I can calculate on whichever device I am using.

| ID | Given | When | Then |
|---|---|---|---|
| AC-022 | I open the calculator on a desktop browser | the page loads | the buttons and display are laid out legibly and are usable with mouse and keyboard |
| AC-023 | I open the calculator on a mobile browser | the page loads | the buttons and display adapt to the smaller screen and are usable by touch |

### US-013: Use the calculator for free with no payments or ads

**Priority:** medium

> As a calculator user, I want the calculator to be completely free with no ads, so that I can use it without cost or distraction.

| ID | Given | When | Then |
|---|---|---|---|
| AC-024 | I use any feature of the calculator | I interact with it | no payment, subscription or advertisement is presented at any point (assumption: the product is free with no monetization) |

### US-014: Start each session fresh with no stored history

**Priority:** medium

> As a calculator user, I want no calculation history kept between sessions, so that my calculations are private and the tool stays simple.

| ID | Given | When | Then |
|---|---|---|---|
| AC-025 | I have performed calculations in a session | I close the browser or reload the page and return | no previous calculation history is restored and the calculator starts from zero (assumption: no persistent data is stored beyond the current calculation) |
<!-- sdlc:auto:end epics -->
