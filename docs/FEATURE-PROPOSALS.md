# Feature Proposals from TODO Comments

## 1. Gallery: Load More Button & Lazy Image Loading

**Location:** [src/components/Gallery.tsx](../src/components/Gallery.tsx#L207)

**Current State:** All gallery images load at once

**Proposed Features:**

- [ ] Implement "Load More" button to paginate gallery images
- [ ] Show reduced number of images initially (e.g., 12 images)
- [ ] Load additional images on button click
- [ ] Mobile optimization: Display even fewer images initially on mobile (e.g., 6 images)

**Implementation Steps:**

1. Add state to track displayed image count: `displayedCount`
2. Create `handleLoadMore()` function to increment displayed count
3. Filter photos array to show only `photos.slice(0, displayedCount)`
4. Add conditional "Load More" button below gallery when more images exist
5. Use responsive values for initial count: `6` on mobile, `12` on desktop
6. Optional: Add smooth scroll to button on click

**Complexity:** ⭐⭐ Medium
**Estimated Time:** 1-2 hours
**Dependencies:** None

---

## 2. Header: Hydration Mismatch Error

**Location:** [src/components/Header.tsx](../src/components/Header.tsx#L181)

**Current Issue:** Extra CSS classes (`vreakcr idc0_350`) being injected by browser extensions causing hydration mismatch

**Notes:**

- This appears to be documented but not fixed
- Error log shows CSS classes being added to `<html>` element
- Likely caused by browser extensions (e.g., Dark mode extensions, ad blockers)

**Possible Solutions:**

1. Suppress hydration warnings if expected (not recommended for production)
2. Use `suppressHydrationWarning` on `<html>` element (React suppresses mismatches on that element only)
3. Document that this is expected behavior with browser extensions installed
4. Add instructions in README for users experiencing this in dev environment

**Complexity:** ⭐ Low (Documentation/Config)
**Estimated Time:** 30 minutes
**Recommendation:** Add `suppressHydrationWarning` attribute to `<html>` tag in layout.tsx, then remove TODO comment

---

## 3. About: Timeline Border on Mobile

**Location:** [src/components/About.tsx](../src/components/About.tsx#L130)

**Current State:** Timeline block border hidden on mobile (`hidden md:block`)

**Proposed Change:**

- [ ] Keep timeline block border visible on mobile
- [ ] Maintain border on left side instead of hiding completely
- [ ] Ensure mobile layout still looks aesthetically pleasing

**Implementation Steps:**

1. Review current timeline CSS classes
2. Remove `hidden` class from timeline dot container
3. Adjust spacing/padding for mobile if needed to prevent overlap
4. Test responsive layout at mobile breakpoint
5. Verify alignment consistency across devices

**Complexity:** ⭐ Low
**Estimated Time:** 20-30 minutes
**Testing Required:** Visual regression testing at mobile breakpoints

---

## 4. Hero: Image Carousel Pagination Counter Reset

**Location:** [src/components/Hero.tsx](../src/components/Hero.tsx#L187)

**Current Behavior:** When user changes image via pagination, the auto-advance timer continues from current position

**Desired Behavior:** Reset counter to 0 and start fresh timer when user manually changes image

**Implementation Steps:**

1. Identify the auto-advance timer/interval hook (likely `setInterval` or animation timer)
2. Create handler function that runs when pagination button is clicked
3. In that handler:
   - Clear current timer/interval
   - Reset counter state to 0
   - Restart timer
4. Bind handler to all pagination button click events
5. Test with carousel to verify counter resets

**Complexity:** ⭐⭐ Medium
**Estimated Time:** 1 hour
**Dependencies:** Need to locate timer implementation in Hero.tsx

---

## 5. Layout: Versioning System

**Location:** [src/app/layout.tsx](../src/app/layout.tsx#L108)

**Proposed Feature:** Add versioning system to show versioned content

**Questions to Consider:**

- What content should be versioned? (Feature flags, content blocks, UI components?)
- Should versions be:
  - Stored in database/CMS?
  - Defined in config files?
  - Managed via environment variables?
- What's the versioning strategy? (Semantic versioning, timestamps, feature flags?)

**Possible Implementation Approaches:**

### Option A: Feature Flags (Simplest)

- Use environment variables or config object
- Toggle features on/off based on version
- Store in `lib/config.ts` or `.env.local`

### Option B: Content Versioning

- Create versioning system for specific components/pages
- Store version info in metadata
- Display appropriate version based on user/date

### Option C: Full Versioning System

- Create version management middleware
- Version all content/features
- Migration system for version updates

**Complexity:** ⭐⭐⭐-⭐⭐⭐⭐ (Depends on approach)
**Estimated Time:** 2-4 hours (Option A), 4-8 hours (Options B/C)
**First Step:** Clarify versioning requirements

---

## Summary & Recommendations

| Feature            | Priority | Complexity | Effort | Recommended            |
| ------------------ | -------- | ---------- | ------ | ---------------------- |
| Gallery Load More  | Medium   | Low-Med    | 1-2h   | ✅ Yes                 |
| Timeline Mobile    | High     | Low        | 20-30m | ✅ Yes                 |
| Hero Counter Reset | Medium   | Medium     | 1h     | ✅ Yes                 |
| Header Hydration   | Low      | Low        | 30m    | ✅ Yes (Config Fix)    |
| Versioning System  | Low      | High       | 2-4h+  | ⚠️ Needs Clarification |

**Quick Wins (Start Here):**

1. Timeline Mobile Fix (30 min)
2. Header Hydration Fix (30 min)
3. Hero Counter Reset (1 hour)

**Medium Effort:** 4. Gallery Load More (1-2 hours)

**Requires Clarification:** 5. Versioning System - Define requirements first
