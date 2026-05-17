import { quotes } from '../data/quotes';

export default function QuoteBlock({ index = 0 }) {
  const quote = quotes[index % quotes.length];

  return (
    <div className="bg-sandalwood/5 border-l-4 border-gold rounded-r-lg p-6 my-8">
      <p className="font-serif text-lg text-ink italic leading-relaxed">
        "{quote.text}"
      </p>
      <p className="text-sm text-ink-light mt-3">—— {quote.source}</p>
    </div>
  );
}
