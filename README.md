# Agentify - AI Agent Workflow Platform

**Build powerful AI workflows with pre-configured agents, powered by Anthropic Claude.**

A mobile-first platform that enables users to discover, test, and orchestrate AI agents into workflows. Think IFTTT for agentic AI.

![Version](https://img.shields.io/badge/version-1.0.0--mvp-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🚀 Features

### ✅ Currently Implemented (MVP Demo)

- **🏠 Home Dashboard** - Quick access to agents and workflows
- **📚 Agent Catalogue** - Browse 8 pre-built AI agents
  - Research Analyst
  - Long-Form Writer
  - Data Insight Finder
  - Social Media Manager
  - Summarizer Pro
  - Email Composer
  - Creative Brainstormer
  - Meeting Summarizer
- **🔍 Agent Search & Filtering** - Find agents by name, category, or capability
- **🧪 Live Agent Testing** - Try any agent with real Anthropic API calls
- **📊 Agent Metrics** - See ratings, costs, speed, and usage stats
- **📱 Mobile-First UI** - Touch-optimized, responsive design

### 🚧 Coming Soon

- Workflow Composer (visual node-based editor)
- Multi-agent workflows
- Execution history
- Supabase integration
- User authentication
- Workflow templates
- Scheduled executions
- Real-time streaming responses

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **AI:** Anthropic Claude API
- **Icons:** Lucide React
- **Future:** Supabase (database, auth), Vercel (deployment)

---

## ⚡ Quick Start

### Prerequisites

- Node.js 18+ installed
- Anthropic API key ([get one here](https://console.anthropic.com/))

### Installation

1. **Clone the repository**
   ```bash
   cd Agentify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Add your Anthropic API key**

   Edit `.env.local` and add:
   ```
   ANTHROPIC_API_KEY=your_api_key_here
   ```

   Get your API key from [Anthropic Console](https://console.anthropic.com/)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 Usage Guide

### Browsing Agents

1. Click **"Agents"** in the bottom navigation
2. Browse by category or search by name
3. Click any agent to see details

### Testing an Agent

1. Open an agent detail page
2. Scroll to **"Try It Now"**
3. Enter your input (e.g., a research topic)
4. Click **"Run Test"**
5. See real-time results from Claude API

**Example inputs:**

- **Research Analyst:** "AI in healthcare trends 2024"
- **Long-Form Writer:** "Write a blog post about sustainable living"
- **Summarizer Pro:** Paste any long text
- **Social Media Manager:** "Announcing our new product launch"

### Cost Information

- Each test shows estimated cost before execution
- Average costs range from $0.002 to $0.025 per run
- Costs are calculated based on actual token usage

---

## 📂 Project Structure

```
Agentify/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── page.tsx           # Home dashboard
│   │   ├── agents/
│   │   │   ├── page.tsx       # Agent catalogue
│   │   │   └── [id]/
│   │   │       └── page.tsx   # Agent detail + testing
│   │   ├── api/
│   │   │   └── execute/
│   │   │       └── route.ts   # Agent execution API
│   │   ├── new/               # Workflow builder (placeholder)
│   │   ├── history/           # Execution history (placeholder)
│   │   └── settings/          # Settings page
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── agents/            # Agent-specific components
│   │   └── layout/            # Layout components
│   ├── lib/
│   │   ├── agents.ts          # Agent data and utilities
│   │   └── utils.ts           # Helper functions
│   └── types/
│       └── index.ts           # TypeScript types
├── public/                     # Static assets
├── PRD.md                      # Product requirements
├── AGENT_CATALOGUE.md          # Agent specifications
├── WIREFRAMES.md               # UI wireframes
├── DESIGN_SYSTEM.md            # Design system
└── README.md                   # This file
```

---

## 🎨 Design System

The app follows a comprehensive design system with:

- **Color Palette:** Primary (Indigo), Secondary (Green), Semantic colors
- **Typography:** System font stack, responsive type scale
- **Components:** Buttons, Cards, Inputs, Badges, etc.
- **Mobile-First:** Touch-optimized (44px minimum targets)
- **Accessibility:** WCAG 2.1 AA compliant

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for full details.

---

## 🤖 Available Agents

### Research & Analysis
- **🔍 Research Analyst** - Deep research with citations ($0.02)
- **📊 Data Insight Finder** - Turn data into decisions ($0.015)

### Content Creation
- **✍️ Long-Form Writer** - From outline to article ($0.025)
- **📱 Social Media Manager** - Multi-platform content ($0.003)
- **📧 Email Composer** - Professional emails ($0.002)

### Data Processing
- **📝 Summarizer Pro** - Any length → Key points ($0.01)

### Communication
- **🎯 Meeting Summarizer** - Transcript → Action items ($0.015)

### Creative & Media
- **💡 Creative Brainstormer** - Ideas on demand ($0.015)

See [AGENT_CATALOGUE.md](./AGENT_CATALOGUE.md) for complete specifications.

---

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Environment Variables

```env
# Required
ANTHROPIC_API_KEY=your_api_key_here

# Future (when implementing Supabase)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

**One-command deployment:**
```bash
vercel
```

### Manual Deployment

```bash
npm run build
npm start
```

---

## 📊 Roadmap

### Phase 1: MVP (Current) ✅
- [x] Agent catalogue
- [x] Agent detail pages
- [x] Live agent testing
- [x] Mobile-responsive UI

### Phase 2: Workflows (Next) 🚧
- [ ] Visual workflow composer
- [ ] Multi-agent workflows
- [ ] Execution history
- [ ] Workflow templates

### Phase 3: Platform 📅
- [ ] User authentication (Supabase)
- [ ] Save workflows to database
- [ ] Scheduled workflows
- [ ] Sharing & collaboration

### Phase 4: Advanced 🔮
- [ ] Custom agent builder
- [ ] Marketplace
- [ ] Analytics dashboard
- [ ] Team features

---

## 💰 Cost Optimization

**Tips to minimize API costs:**

1. **Use appropriate models**
   - Claude Haiku for simple tasks (~$0.003)
   - Claude Sonnet for balanced tasks (~$0.015)
   - Claude Opus only for complex reasoning (~$0.06)

2. **Optimize prompts**
   - Be specific to reduce iterations
   - Use shorter system prompts where possible

3. **Monitor usage**
   - Check Settings page for API usage
   - Set up budget alerts in Anthropic Console

---

## 🤝 Contributing

Contributions welcome! This is an MVP demo showcasing the concept.

**Areas for contribution:**
- Additional agents
- UI improvements
- Workflow composer
- Testing and bug fixes

---

## 📝 License

MIT License - feel free to use this for your own projects!

---

## 🙏 Acknowledgments

- **Anthropic** - For the amazing Claude API
- **Vercel** - For Next.js and hosting
- **Lucide** - For beautiful icons

---

## 📞 Support

**Issues?** Check these first:

1. **API key not working?**
   - Make sure it's in `.env.local` (not `.env.local.example`)
   - Restart the dev server after adding the key
   - Check your API key has credits in Anthropic Console

2. **Build errors?**
   - Run `npm install` again
   - Delete `.next` folder and rebuild
   - Check Node.js version (18+)

3. **Agents not executing?**
   - Check browser console for errors
   - Verify API key is set correctly
   - Check Anthropic API status

---

## 🎯 Next Steps

1. **Try the demo** - Run `npm run dev` and explore agents
2. **Test an agent** - Pick an agent and try it with real input
3. **Read the docs** - Check out [PRD.md](./PRD.md) for the full vision
4. **Build features** - Start with the workflow composer!

---

**Built with ❤️ using Claude Code**

*This MVP demonstrates the core concept of Agentify - a platform to make agentic AI accessible to everyone through visual workflows and pre-configured agents.*
