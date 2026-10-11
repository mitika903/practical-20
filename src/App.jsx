import React from 'react';
import UncontrolledFeedbackForm from './components/UncontrolledFeedbackForm';

function App() {
return (
<div className="relative min-h-screen overflow-hidden bg-[#080a12] px-4 py-10 sm:px-8 sm:py-14">
<div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]"></div>
<div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-rose-500/10 blur-[100px]"></div>

<div className="relative mx-auto mb-8 max-w-lg text-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
<span className="h-2 w-2 animate-pulse rounded-full bg-orange-400"></span>
Feedback Studio
</div>
<h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">YOUR <span className="text-orange-400">VOICE.</span></h1>
<p className="mt-3 text-sm text-slate-400">Good experiences start with listening.</p>
</div>

<UncontrolledFeedbackForm />

<p className="relative mt-6 text-center text-xs tracking-wide text-slate-600">LISTEN · LEARN · IMPROVE</p>
</div>
);
}

export default App;