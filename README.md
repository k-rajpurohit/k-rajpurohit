<h1 align="center">Hi, I'm Krishna 👋</h1>
<h3 align="center">AI Engineer · LLM applications & AI agents · Ahmedabad, India</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/krishna-rajpurohit-8125b9204/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:krishnarajpurohit2014@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://tryloomin.ca"><img src="https://img.shields.io/badge/Live-tryloomin.ca-111111?style=flat-square" alt="tryloomin.ca" /></a>
</p>

I build LLM applications that run in production: multi-agent pipelines, tool-calling agents, vision and image generation, and voice agents. I also build what keeps them reliable with real users: evaluations, guardrails, cost controls and tests.

Most of this work is private client and employer code, so the projects below link to the live products. I'm happy to walk through any of the architectures in an interview.

---

### Selected work

**LOOMIN: AI custom t-shirt studio** · [tryloomin.ca](https://tryloomin.ca) · Ailevate, 2026
<br>Main engineer. FastAPI, PostgreSQL, React/TypeScript, Claude and OpenAI.
- Chose the generation pipeline with a blind A/B test of two approaches. In the shipped flow, an LLM picks 3 of 24 curated styles, image models stream partial renders live, and customers refine designs by chat.
- Built an LLM evaluation for the vision text-and-facts check on 28 labelled print sides. A tighter judge prompt and a model switch cut false alarms from 11 to 0, while still catching both real errors.
- 15 output guardrails (no invented names, dates or numbers; no private details printed), locked in by golden regression runs.
- Pixel-level print QA tool (NumPy, Pillow, SciPy): on 39 real redraws it caught all 7 changed print files, with no false alarms on 14 known-good ones.
- Spend gate, per-run cost ledger, privacy-safe logs, Shopify checkout, and 220+ test files in CI.

**AutomationOwl: AI agents platform for small businesses** · Elite Workforce, 2026
- AI services on Llama 3.3 70B (Groq), Claude Haiku, Mistral and Gemini 2.5 Flash, running on BullMQ workers.
- Voice AI agents on Vapi and Twilio: outbound sales calls, an inbound receptionist, and HR screening calls.
- Multilingual business-card OCR bot (English, Hindi, Gujarati, Arabic) with a 3-stage vision/OCR fallback.

**AI On Hunt: recruitment platform** · [aionhunt.com](https://aionhunt.com) · Elite Workforce, 2026
- Explainable candidate-job match score, and job-description extraction that combines an LLM with a rule-based skill re-scan.

**AI Scout: resume tailoring engine** · Elite Workforce, 2026
- A truthfulness check that blocks invented experience, a Gemini → Llama 3.3 70B fallback chain, and prompt versioning with automatic revert.

---

### Tech I use

**Languages**
<p>
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white" alt="SQL" />
</p>

**LLMs and GenAI**
<p>
  <img src="https://img.shields.io/badge/Claude-191919?style=flat-square&logo=anthropic&logoColor=white" alt="Claude" />
  <img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white" alt="OpenAI" />
  <img src="https://img.shields.io/badge/Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white" alt="Gemini" />
  <img src="https://img.shields.io/badge/Llama_3_(Groq)-0467DF?style=flat-square" alt="Llama 3" />
  <img src="https://img.shields.io/badge/Mistral-FA520F?style=flat-square" alt="Mistral" />
  <img src="https://img.shields.io/badge/Vapi_voice_agents-222222?style=flat-square" alt="Vapi" />
</p>

**Backend and data**
<p>
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/PostgreSQL_+_pgvector-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" alt="Redis" />
  <img src="https://img.shields.io/badge/BullMQ-E0234E?style=flat-square" alt="BullMQ" />
  <img src="https://img.shields.io/badge/Celery-37814A?style=flat-square&logo=celery&logoColor=white" alt="Celery" />
</p>

**DevOps and ML**
<p>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white" alt="n8n" />
  <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white" alt="TensorFlow" />
  <img src="https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white" alt="NumPy" />
  <img src="https://img.shields.io/badge/pandas-150458?style=flat-square&logo=pandas&logoColor=white" alt="pandas" />
</p>

### Learning next
RAG with retrieval evaluation (LangGraph, Ragas), PyTorch and Hugging Face fine-tuning, and deploying on AWS.
