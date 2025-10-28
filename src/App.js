import React, { useState } from "react";

const WAPP_URL = "https://wa.me/79990000000";
const TG_URL = "https://t.me/your_manager";

function SiteHeader({ onOpenQuiz }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl">Select</span>
        <button onClick={onOpenQuiz} className="bg-blue-600 text-white px-4 py-2 rounded">
          Пройти квиз
        </button>
      </div>
    </header>
  );
}
function Hero({ onOpenQuiz }) { return <section className="py-8">Hero block <button onClick={onOpenQuiz}>CTA</button></section>; }
function DoNothingBlock({ onOpenQuiz }) { return <section className="py-8">DoNothingBlock <button onClick={onOpenQuiz}>CTA</button></section>; }
function AfterBlock({ onOpenQuiz }) { return <section className="py-8">AfterBlock <button onClick={onOpenQuiz}>CTA</button></section>; }
function TrustBlock({ onOpenQuiz }) { return <section className="py-8">TrustBlock <button onClick={onOpenQuiz}>CTA</button></section>; }
function HowBlock({ onOpenQuiz }) { return <section className="py-8">HowBlock <button onClick={onOpenQuiz}>CTA</button></section>; }
function ExplainBlock({ onOpenQuiz }) { return <section className="py-8">ExplainBlock <button onClick={onOpenQuiz}>CTA</button></section>; }
function PricingBlock({ onOpenQuiz }) { return <section className="py-8">PricingBlock <button onClick={onOpenQuiz}>CTA</button></section>; }

export default function App() {
  const [quizOpen, setQuizOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader onOpenQuiz={() => setQuizOpen(true)} />
      <main className="pt-20 sm:pt-24">
        <Hero onOpenQuiz={() => setQuizOpen(true)} />
        <DoNothingBlock onOpenQuiz={() => setQuizOpen(true)} />
        <AfterBlock onOpenQuiz={() => setQuizOpen(true)} />
        <TrustBlock onOpenQuiz={() => setQuizOpen(true)} />
        <HowBlock onOpenQuiz={() => setQuizOpen(true)} />
        <ExplainBlock onOpenQuiz={() => setQuizOpen(true)} />
        <PricingBlock onOpenQuiz={() => setQuizOpen(true)} />
      </main>
      {quizOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6">
            <h2>Квиз</h2>
            <button onClick={() => setQuizOpen(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}