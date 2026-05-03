export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For DevOps &amp; SRE Teams
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Turn Past Incidents Into<br />
          <span className="text-[#58a6ff]">Actionable Runbooks</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Ingest incident data from PagerDuty, Slack, and Jira. Our AI analyzes patterns and generates standardized runbook templates with decision trees — so your team responds faster every time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Generating Runbooks — $99/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-white">10x</div>
            <div className="text-sm text-[#8b949e]">Faster response</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">3 sources</div>
            <div className="text-sm text-[#8b949e]">Integrated</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">AI-driven</div>
            <div className="text-sm text-[#8b949e]">Pattern analysis</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$99</div>
          <div className="text-[#8b949e] mb-6">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited runbook generation",
              "PagerDuty, Slack & Jira integrations",
              "AI pattern analysis & decision trees",
              "Custom template editor",
              "Team collaboration (up to 20 seats)",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No setup fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the AI analyze my incidents?</h3>
            <p className="text-[#8b949e] text-sm">We ingest your incident history from PagerDuty, Slack, and Jira, then use large language models to identify recurring patterns, common root causes, and effective resolution steps — automatically structuring them into decision-tree runbooks.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my incident data kept private?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Your data is encrypted at rest and in transit, never used to train shared models, and stored in isolated workspaces. You can delete all data at any time from your account settings.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I customize the generated runbooks?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. Every generated runbook is fully editable in our template editor. You can adjust decision trees, add custom steps, set escalation paths, and export to Confluence, Notion, or PDF.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Incident Runbook Generator. All rights reserved.
      </footer>
    </main>
  );
}
