# Agentify Mobile Wireframes
## Mobile-First UI Design (iOS/Android PWA)

**Screen Size:** 375x812px (iPhone X base, responsive up)
**Design Philosophy:** Touch-first, minimal taps, immediate feedback

---

## Screen Flow

```
┌─────────────────────────────────────┐
│         User Journey Flow           │
└─────────────────────────────────────┘

Login/Signup
     ↓
Home Dashboard ←─────────┐
     ↓                    │
Agent Catalogue           │
     ↓                    │
Agent Detail              │
     ↓                    │
Add to Workflow ──────────┤
     ↓                    │
Workflow Composer         │
     ↓                    │
Test/Execute              │
     ↓                    │
Execution Monitor         │
     ↓                    │
Results/History ──────────┘
```

---

## 1. Home Dashboard (Landing Screen)

```
╔═══════════════════════════════════════╗
║  ☰  Agentify          🔔  👤         ║  <- Header (sticky)
╠═══════════════════════════════════════╣
║                                       ║
║  👋 Hey Sean!                         ║
║  What would you like to automate?     ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │  🔍  Search agents...           │ ║  <- Quick search
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ Recent Workflows ━━━            ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ 📊 Market Research Flow          │ ║
║  │ 3 agents • Last run 2h ago       │ ║  <- Workflow card
║  │ [▶ Run Again]                   │ ║     (tappable)
║  └─────────────────────────────────┘ ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ✍️  Content Pipeline             │ ║
║  │ 5 agents • Last run 1d ago       │ ║
║  │ [▶ Run Again]                   │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ Quick Actions ━━━               ║
║                                       ║
║  ┌──────────┐ ┌──────────┐          ║
║  │    🔍    │ │    ✍️     │          ║  <- Quick action
║  │ Research │ │  Write   │          ║     tiles (2x2 grid)
║  └──────────┘ └──────────┘          ║
║  ┌──────────┐ ┌──────────┐          ║
║  │    📊    │ │    ➕     │          ║
║  │ Analyze  │ │ New Flow │          ║
║  └──────────┘ └──────────┘          ║
║                                       ║
║  ━━━ Suggested Workflows ━━━         ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ 🎯 Email → Summary → Response    │ ║
║  │ Perfect for customer support     │ ║  <- Template card
║  │ ⭐ 4.8 • 234 users               │ ║
║  │ [Try It]                         │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
╠═══════════════════════════════════════╣
║  [🏠] [📚] [➕] [📊] [⚙️]           ║  <- Bottom nav
║  Home  Agents  New  History Settings  ║     (always visible)
╚═══════════════════════════════════════╝
```

**Key Features:**
- Personalized greeting
- Quick search (focus on speed)
- Recent workflows (1-tap re-run)
- Quick action tiles (common tasks)
- Suggested workflows (discovery)
- Bottom nav (thumb-friendly)

---

## 2. Agent Catalogue (Browse Agents)

```
╔═══════════════════════════════════════╗
║  ←  Agent Catalogue       [Filter]    ║  <- Header with back
╠═══════════════════════════════════════╣
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │  🔍  Search by name or task...  │ ║  <- Search bar
║  └─────────────────────────────────┘ ║
║                                       ║
║  [All] [Research] [Content] [Data]   ║  <- Category pills
║  ───   ─────────  ───────   ────     ║     (horizontal scroll)
║                                       ║
║  ━━━ Popular Agents ━━━              ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ 🔍  Research Analyst        ✓   │ ║  <- Agent card
║  │                                  │ ║     (tappable)
║  │ Deep research with citations     │ ║
║  │                                  │ ║
║  │ ⭐ 4.9 • 1.2k uses • ~$0.02     │ ║  <- Metrics
║  │ ⚡ Fast (5s)                     │ ║
║  │                                  │ ║
║  │ [+] Add    [👁️] Preview        │ ║  <- Actions
║  └─────────────────────────────────┘ ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ✍️  Long-Form Writer        ✓   │ ║
║  │                                  │ ║
║  │ From outline to article          │ ║
║  │                                  │ ║
║  │ ⭐ 4.8 • 890 uses • ~$0.025     │ ║
║  │ ⚡ Medium (10s)                  │ ║
║  │                                  │ ║
║  │ [+] Add    [👁️] Preview        │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ 📊  Data Insight Finder     ✓   │ ║
║  │                                  │ ║
║  │ Turn data into decisions         │ ║
║  │                                  │ ║
║  │ ⭐ 4.7 • 567 uses • ~$0.015     │ ║
║  │ ⚡ Fast (8s)                     │ ║
║  │                                  │ ║
║  │ [+] Add    [👁️] Preview        │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  (scroll for more...)                 ║
║                                       ║
╠═══════════════════════════════════════╣
║  [🏠] [📚] [➕] [📊] [⚙️]           ║
║  Home  Agents  New  History Settings  ║
╚═══════════════════════════════════════╝
```

**Key Features:**
- Real-time search
- Category filtering (pills)
- Clear metrics (rating, usage, cost, speed)
- Verification badges (✓)
- Quick actions (add to workflow or preview)
- Infinite scroll

---

## 3. Agent Detail View (Expanded)

```
╔═══════════════════════════════════════╗
║  ←  Research Analyst          [+]     ║  <- Back + Add button
╠═══════════════════════════════════════╣
║                                       ║
║  🔍                                   ║  <- Large icon
║  Research Analyst                     ║
║  ✓ Verified                           ║
║                                       ║
║  ⭐⭐⭐⭐⭐ 4.9 (234 reviews)        ║  <- Rating
║  💰 ~$0.02 per run                    ║  <- Cost
║  ⚡ Fast (5s avg)                     ║  <- Speed
║  🔄 1,234 total uses                  ║  <- Usage
║                                       ║
║  ━━━ Description ━━━                 ║
║                                       ║
║  Conducts comprehensive research on   ║
║  any topic, synthesizes information   ║  <- Full description
║  from multiple sources, and provides  ║
║  well-cited summaries with insights.  ║
║                                       ║
║  ━━━ Capabilities ━━━                ║
║                                       ║
║  • Multi-source research synthesis    ║
║  • Citation extraction & formatting   ║  <- Bullet points
║  • Key insight identification         ║
║  • Trend analysis                     ║
║  • Fact verification                  ║
║                                       ║
║  ━━━ What It Needs ━━━               ║
║                                       ║
║  📥 Input:                            ║
║    • Research topic                   ║  <- Input schema
║    • Depth level (optional)           ║     (simplified)
║    • Focus areas (optional)           ║
║                                       ║
║  📤 Output:                           ║
║    • Summary                          ║  <- Output schema
║    • Key insights                     ║
║    • Detailed findings                ║
║    • Citations                        ║
║                                       ║
║  ━━━ Example Use Cases ━━━           ║
║                                       ║
║  🎯 Market research                   ║
║  🎯 Competitive analysis              ║  <- Use cases
║  🎯 Academic research                 ║
║  🎯 Investment due diligence          ║
║                                       ║
║  ━━━ Try It Now ━━━                  ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ Topic:                           │ ║
║  │ ┌─────────────────────────────┐ │ ║  <- Quick test
║  │ │ AI in healthcare...         │ │ ║     (expandable)
║  │ └─────────────────────────────┘ │ ║
║  │                                  │ ║
║  │ [Run Test] (~$0.02)              │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ Reviews ━━━                     ║
║                                       ║
║  ⭐⭐⭐⭐⭐ "Perfect for market     ║
║  research!" - @sarah_m (2d ago)      ║  <- Recent reviews
║                                       ║
║  ⭐⭐⭐⭐⭐ "Saves me hours every   ║
║  week" - @john_d (5d ago)            ║
║                                       ║
║  [See All Reviews]                    ║
║                                       ║
╠═══════════════════════════════════════╣
║           [Add to Workflow]           ║  <- Primary CTA
║           [Try It Now]                ║     (sticky footer)
╚═══════════════════════════════════════╝
```

**Key Features:**
- Complete agent information
- Visual metrics (icons + values)
- Input/output schema (simplified)
- Quick test capability
- Social proof (reviews)
- Sticky CTA buttons

---

## 4. Workflow Composer (Visual Builder)

```
╔═══════════════════════════════════════╗
║  ←  New Workflow              [Save]  ║
╠═══════════════════════════════════════╣
║                                       ║
║  Workflow Name:                       ║
║  ┌─────────────────────────────────┐ ║
║  │ Market Research Pipeline        │ ║  <- Editable name
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ Canvas ━━━                      ║  <- Scrollable canvas
║  ┌─────────────────────────────────┐ ║
║  │                                  │ ║
║  │   ┌────────────────┐            │ ║
║  │   │ 🚀 TRIGGER     │            │ ║  <- Start node
║  │   │ Manual         │            │ ║
║  │   └───────┬────────┘            │ ║
║  │           │                      │ ║
║  │           ↓                      │ ║
║  │   ┌────────────────┐            │ ║
║  │   │ 🔍 Research    │ [⚙️] [×]  │ ║  <- Agent node
║  │   │ Analyst        │            │ ║     (config + delete)
║  │   └───────┬────────┘            │ ║
║  │           │                      │ ║
║  │           ↓                      │ ║
║  │   ┌────────────────┐            │ ║
║  │   │ 📝 Summarizer  │ [⚙️] [×]  │ ║  <- Agent node
║  │   │ Pro            │            │ ║
║  │   └───────┬────────┘            │ ║
║  │           │                      │ ║
║  │           ↓                      │ ║
║  │   ┌────────────────┐            │ ║
║  │   │ 💾 OUTPUT      │            │ ║  <- End node
║  │   │ Save to docs   │            │ ║
║  │   └────────────────┘            │ ║
║  │                                  │ ║
║  │   [+ Add Agent]                 │ ║  <- Add button
║  │                                  │ ║     (opens agent picker)
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ Estimated Cost ━━━              ║
║  💰 ~$0.035 per run                  ║  <- Cost preview
║  ⚡ ~15s total execution              ║
║                                       ║
╠═══════════════════════════════════════╣
║  [< Back]    [Test Run]    [Save]    ║  <- Action buttons
╚═══════════════════════════════════════╝
```

**Key Features:**
- Visual node-based editor
- Drag to reorder (touch-friendly)
- Inline configuration
- Real-time cost estimation
- Clear data flow (arrows)
- Easy add/remove nodes

---

## 4b. Workflow Composer - Agent Picker (Modal)

```
╔═══════════════════════════════════════╗
║  Select Agent to Add          [×]     ║  <- Modal overlay
╠═══════════════════════════════════════╣
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │  🔍  Search agents...           │ ║  <- Quick search
║  └─────────────────────────────────┘ ║
║                                       ║
║  [All] [Research] [Content] [Data]   ║  <- Categories
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ 🔍  Research Analyst             │ ║
║  │ Deep research with citations     │ ║  <- Agent option
║  │ ~$0.02 • ⚡ Fast                 │ ║     (tappable)
║  └─────────────────────────────────┘ ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ✍️  Long-Form Writer             │ ║
║  │ From outline to article          │ ║
║  │ ~$0.025 • ⚡ Medium              │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ 📊  Data Insight Finder          │ ║
║  │ Turn data into decisions         │ ║
║  │ ~$0.015 • ⚡ Fast                │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  (scroll for more...)                 ║
║                                       ║
╚═══════════════════════════════════════╝
```

---

## 5. Workflow Execution (Running)

```
╔═══════════════════════════════════════╗
║  ←  Market Research Pipeline          ║
╠═══════════════════════════════════════╣
║                                       ║
║  Status: ⚡ Running...                ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░  60%      │ ║  <- Progress bar
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ Execution Timeline ━━━          ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ✅ TRIGGER                       │ ║
║  │ Started workflow                 │ ║  <- Completed step
║  │ 0:00                             │ ║     (collapsed)
║  └─────────────────────────────────┘ ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ✅ 🔍 Research Analyst           │ ║
║  │ Completed in 8.2s                │ ║
║  │ 1,234 tokens • $0.018            │ ║  <- Metrics
║  │                                  │ ║
║  │ [📄 View Output]                │ ║  <- Expandable
║  └─────────────────────────────────┘ ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ⚡ 📝 Summarizer Pro             │ ║
║  │ Running... (6.1s elapsed)        │ ║  <- Active step
║  │                                  │ ║     (pulsing animation)
║  │ ▓▓▓▓▓▓▓▓░░░░░░░░░░░░             │ ║  <- Sub-progress
║  │                                  │ ║
║  │ Streaming output:                │ ║
║  │ "The AI healthcare market is..." │ ║  <- Live streaming
║  └─────────────────────────────────┘ ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ⏳ 💾 OUTPUT                     │ ║
║  │ Waiting...                       │ ║  <- Pending step
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ Costs So Far ━━━                ║
║  💰 $0.018 / ~$0.035 estimated       ║  <- Running costs
║                                       ║
╠═══════════════════════════════════════╣
║           [Stop Execution]            ║  <- Emergency stop
╚═══════════════════════════════════════╝
```

**Key Features:**
- Real-time progress updates
- Step-by-step execution view
- Live token streaming
- Cost tracking
- Expandable outputs
- Stop button (safety)

---

## 6. Execution Results (Completed)

```
╔═══════════════════════════════════════╗
║  ←  Market Research Pipeline          ║  [Share] [⋮]
╠═══════════════════════════════════════╣
║                                       ║
║  Status: ✅ Completed                 ║
║  Finished in 15.3s • Cost: $0.033     ║
║                                       ║
║  ━━━ Final Output ━━━                ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │                                  │ ║
║  │ AI Healthcare Market Summary     │ ║
║  │                                  │ ║  <- Main output
║  │ Key Findings:                    │ ║     (formatted)
║  │ • Market size: $11B in 2024      │ ║
║  │ • Growth rate: 42% YoY           │ ║
║  │ • Top players: Google, IBM...    │ ║
║  │                                  │ ║
║  │ [Read Full Report ↗]             │ ║
║  │                                  │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ Step Details ━━━                ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ 🔍 Research Analyst              │ ║
║  │ ✅ Completed in 8.2s             │ ║
║  │ 1,234 tokens • $0.018            │ ║  <- Step summary
║  │                                  │ ║     (expandable)
║  │ [▼ View Details]                 │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ 📝 Summarizer Pro                │ ║
║  │ ✅ Completed in 7.1s             │ ║
║  │ 890 tokens • $0.015              │ ║
║  │                                  │ ║
║  │ [▼ View Details]                 │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ Actions ━━━                     ║
║                                       ║
║  ┌──────────┐ ┌──────────┐          ║
║  │    📋    │ │    📤    │          ║  <- Quick actions
║  │   Copy   │ │  Share   │          ║
║  └──────────┘ └──────────┘          ║
║  ┌──────────┐ ┌──────────┐          ║
║  │    💾    │ │    🔄    │          ║
║  │  Export  │ │ Run Again│          ║
║  └──────────┘ └──────────┘          ║
║                                       ║
╠═══════════════════════════════════════╣
║  [🏠] [📚] [➕] [📊] [⚙️]           ║
║  Home  Agents  New  History Settings  ║
╚═══════════════════════════════════════╝
```

**Key Features:**
- Clear success status
- Formatted final output
- Per-step details (expandable)
- Quick actions (copy, share, export)
- Run again (iterate)

---

## 7. Execution History (Past Runs)

```
╔═══════════════════════════════════════╗
║  ←  Execution History     [Filter]    ║
╠═══════════════════════════════════════╣
║                                       ║
║  [All] [Success] [Failed] [Running]   ║  <- Status filters
║                                       ║
║  ━━━ Today ━━━                        ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ✅ Market Research Pipeline      │ ║
║  │ 15.3s • $0.033 • 2h ago          │ ║  <- Execution card
║  │                                  │ ║     (tappable)
║  │ Final output: AI Healthcare...   │ ║
║  │                                  │ ║
║  │ [View] [Share] [Run Again]       │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ✅ Content Pipeline              │ ║
║  │ 22.1s • $0.045 • 5h ago          │ ║
║  │                                  │ ║
║  │ Final output: 3 blog posts...    │ ║
║  │                                  │ ║
║  │ [View] [Share] [Run Again]       │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ Yesterday ━━━                   ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ❌ Email Automation              │ ║
║  │ Failed after 3.2s • $0.005       │ ║  <- Failed execution
║  │                                  │ ║
║  │ Error: Invalid input format      │ ║
║  │                                  │ ║
║  │ [View Details] [Retry]           │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ This Week ━━━                   ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ ✅ Data Analysis Flow            │ ║
║  │ 18.5s • $0.038 • 3d ago          │ ║
║  │                                  │ ║
║  │ [View]                           │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  (scroll for more...)                 ║
║                                       ║
╠═══════════════════════════════════════╣
║  [🏠] [📚] [➕] [📊] [⚙️]           ║
║  Home  Agents  New  History Settings  ║
╚═══════════════════════════════════════╝
```

**Key Features:**
- Chronological grouping
- Status indicators (✅❌⚡)
- Quick metrics (time, cost)
- Output preview
- Quick actions
- Filter by status

---

## 8. Settings / Profile

```
╔═══════════════════════════════════════╗
║  ←  Settings                          ║
╠═══════════════════════════════════════╣
║                                       ║
║  ━━━ Account ━━━                     ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │  👤                              │ ║
║  │  Sean Turner                     │ ║  <- Profile
║  │  sean@example.com                │ ║
║  │                                  │ ║
║  │  [Edit Profile]                  │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ API Keys ━━━                    ║
║                                       ║
║  ┌─────────────────────────────────┐ ║
║  │ 🔑 Anthropic API Key             │ ║
║  │ sk-ant-...xyz                    │ ║  <- API key mgmt
║  │                                  │ ║     (masked)
║  │ [Update Key]                     │ ║
║  └─────────────────────────────────┘ ║
║                                       ║
║  ━━━ Usage & Billing ━━━             ║
║                                       ║
║  This month:                          ║
║  💰 $12.45 spent                      ║
║  🔄 87 workflow runs                  ║  <- Usage stats
║  📊 23,456 tokens                     ║
║                                       ║
║  [View Details]                       ║
║                                       ║
║  ━━━ Preferences ━━━                 ║
║                                       ║
║  🌙 Dark Mode              [Toggle]   ║  <- Settings
║  🔔 Push Notifications     [Toggle]   ║
║  📧 Email Summaries        [Toggle]   ║
║                                       ║
║  ━━━ Support ━━━                     ║
║                                       ║
║  📚 Documentation                     ║
║  💬 Contact Support                   ║  <- Help links
║  ⭐ Rate App                          ║
║                                       ║
║  ━━━ Legal ━━━                       ║
║                                       ║
║  📄 Privacy Policy                    ║
║  📜 Terms of Service                  ║
║                                       ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ║
║                                       ║
║  [Log Out]                            ║
║                                       ║
║  Version 1.0.0                        ║
║                                       ║
╠═══════════════════════════════════════╣
║  [🏠] [📚] [➕] [📊] [⚙️]           ║
║  Home  Agents  New  History Settings  ║
╚═══════════════════════════════════════╝
```

---

## Navigation Structure

### Bottom Navigation (Always Visible)

```
┌───────────────────────────────────────┐
│  [🏠]   [📚]   [➕]   [📊]   [⚙️]  │
│  Home  Agents  New  History Settings  │
└───────────────────────────────────────┘
```

**Screen Mapping:**
- 🏠 **Home**: Dashboard, recent workflows, quick actions
- 📚 **Agents**: Agent catalogue, browse, search
- ➕ **New**: Create new workflow (composer)
- 📊 **History**: Past executions, results
- ⚙️ **Settings**: Profile, API keys, preferences

---

## Interaction Patterns

### 1. **Touch Targets**
- Minimum size: 44x44px (Apple HIG)
- Padding: 12px minimum between tappable elements
- Visual feedback: 200ms highlight on tap

### 2. **Gestures**
- **Swipe left** on history item: Delete
- **Pull down** on lists: Refresh
- **Long press** on workflow card: Edit/delete menu
- **Pinch** on canvas: Zoom (future)

### 3. **Loading States**
```
┌─────────────────────────────────┐
│  ⚡ Loading...                   │  <- Spinner
│  ▓▓▓▓▓▓░░░░░░░░░░░░  35%        │  <- Progress bar
└─────────────────────────────────┘
```

### 4. **Empty States**
```
┌─────────────────────────────────┐
│         📭                       │  <- Icon
│                                  │
│  No workflows yet                │  <- Message
│  Create your first automation!   │
│                                  │
│  [+ Create Workflow]             │  <- CTA
└─────────────────────────────────┘
```

### 5. **Error States**
```
┌─────────────────────────────────┐
│         ⚠️                       │  <- Warning icon
│                                  │
│  Execution Failed                │  <- Error title
│  Invalid API key                 │  <- Error message
│                                  │
│  [Retry]  [Go to Settings]       │  <- Actions
└─────────────────────────────────┘
```

---

## Design Tokens (Preview)

### Colors
```
Primary:     #6366F1 (Indigo)
Secondary:   #10B981 (Green)
Danger:      #EF4444 (Red)
Warning:     #F59E0B (Amber)
Background:  #FFFFFF (Light) / #1F2937 (Dark)
Text:        #111827 (Light) / #F9FAFB (Dark)
Border:      #E5E7EB (Light) / #374151 (Dark)
```

### Typography
```
Heading 1:   32px, Bold (Workflow names)
Heading 2:   24px, Semibold (Section headers)
Body:        16px, Regular (Main content)
Caption:     14px, Regular (Metadata)
Small:       12px, Regular (Timestamps)
```

### Spacing
```
xs:  4px   (tight)
sm:  8px   (compact)
md:  16px  (default)
lg:  24px  (spacious)
xl:  32px  (section gaps)
```

### Shadows
```
sm:  0 1px 2px rgba(0,0,0,0.05)
md:  0 4px 6px rgba(0,0,0,0.1)
lg:  0 10px 15px rgba(0,0,0,0.1)
```

---

## Accessibility

### 1. **WCAG 2.1 AA Compliance**
- Color contrast: Minimum 4.5:1 for text
- Touch targets: Minimum 44x44px
- Focus indicators: 2px solid outline
- Screen reader support: Proper ARIA labels

### 2. **Keyboard Navigation** (Desktop PWA)
- Tab order: Logical flow
- Shortcuts: Cmd+N (new workflow), Cmd+K (search)
- Escape: Close modals

### 3. **Voice Control** (Future)
- "Create new workflow"
- "Run last workflow"
- "Show execution history"

---

## Responsive Breakpoints

```
Mobile:      320px - 767px  (Primary focus)
Tablet:      768px - 1023px (2-column layouts)
Desktop:     1024px+        (3-column, side panels)
```

---

## Animation Guidelines

### 1. **Page Transitions**
- Duration: 300ms
- Easing: ease-in-out
- Type: Slide (iOS-style)

### 2. **Modal Animations**
- Duration: 200ms
- Easing: ease-out
- Type: Fade + scale

### 3. **Loading Indicators**
- Skeleton screens for lists
- Pulse animation: 1.5s infinite
- Progress bars: smooth 60fps

### 4. **Micro-interactions**
- Button press: Scale 0.95 (100ms)
- Success: Checkmark animation (500ms)
- Error: Shake animation (300ms)

---

## Next Steps

1. **Create high-fidelity mockups** in Figma/Sketch
2. **Build interactive prototype** for user testing
3. **Design system documentation** (Storybook)
4. **Icon set selection** (Lucide/Heroicons)
5. **Illustration style guide** (empty states, onboarding)

---

**Document Status:** v1.0 - Ready for Design Phase
**Last Updated:** October 26, 2025
**Tools Suggested:** Figma, React Flow, Tailwind CSS, shadcn/ui
