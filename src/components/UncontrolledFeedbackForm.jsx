import React, { useRef } from 'react';

function UncontrolledFeedbackForm() {
const nameRef = useRef(null);
const commentsRef = useRef(null);

function handleFormSubmit(e) {
e.preventDefault();
const enteredName = nameRef.current.value;
const enteredComments = commentsRef.current.value;
alert('Feedback Submitted!\nUser: ' + enteredName + '\nComments: ' + enteredComments);
nameRef.current.value = '';
commentsRef.current.value = '';
}

return (
<div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-orange-950/30">
<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl"></div>
<div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl"></div>

<div className="relative border-b border-white/10 bg-gradient-to-br from-orange-500/10 via-transparent to-rose-500/10 p-7 sm:p-9">
<div className="flex items-center justify-between">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-400/10 text-3xl text-orange-300 shadow-lg shadow-orange-500/10">
✦
</div>
<span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-300">
Your Voice Matters
</span>
</div>

<p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-orange-400">Customer Experience</p>
<h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Share Your <span className="text-orange-400">Thoughts.</span></h2>
<p className="mt-3 text-sm leading-relaxed text-slate-400">Every opinion helps us improve. Tell us about your experience and help us do better.</p>

<div className="mt-6 grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
<p className="text-xl text-orange-300">♡</p>
<p className="mt-2 text-sm font-bold text-white">We Listen</p>
<p className="mt-1 text-xs text-slate-500">Your voice matters</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
<p className="text-xl text-rose-300">✧</p>
<p className="mt-2 text-sm font-bold text-white">We Improve</p>
<p className="mt-1 text-xs text-slate-500">Every feedback counts</p>
</div>
</div>
</div>

<div className="relative p-7 sm:p-9">
<div className="mb-6">
<h3 className="text-xl font-bold text-white">Feedback Form</h3>
<p className="mt-1 text-sm text-slate-400">Share your honest experience below.</p>
</div>

<form onSubmit={handleFormSubmit} className="space-y-5">
<div>
<label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300">Your Name</label>
<input
type="text"
ref={nameRef}
className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-orange-400/60 focus:bg-orange-400/[0.04] focus:ring-4 focus:ring-orange-400/10"
placeholder="Enter your name"
/>
</div>

<div>
<label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300">Your Comments</label>
<textarea
ref={commentsRef}
rows="4"
className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm leading-relaxed text-white outline-none transition placeholder:text-slate-600 focus:border-orange-400/60 focus:bg-orange-400/[0.04] focus:ring-4 focus:ring-orange-400/10"
placeholder="Tell us what you think..."
></textarea>
</div>

<button
type="submit"
className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 py-4 text-sm font-extrabold tracking-wide text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30 active:translate-y-0"
>
Submit Feedback
<span className="text-lg transition-transform group-hover:translate-x-1">→</span>
</button>
</form>

<div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
<span className="text-orange-400">◆</span>
Thank you for helping us grow
</div>
</div>
</div>
);
}

export default UncontrolledFeedbackForm;