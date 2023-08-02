import "./ReviewsPage.css";
import Link from "next/link";

function page() {
  return (
    <div className="reviews-page">
      <h1>Témoignages</h1>
      <nav>
        <Link href="/reviews/reviews" className="reviews-link">
          Voir les témoignages
        </Link>
        <Link href="/reviews/setreviews" className="reviews-link">
          Ajouter un témoignage
        </Link>
      </nav>
    </div>
  );
}

export default page;
