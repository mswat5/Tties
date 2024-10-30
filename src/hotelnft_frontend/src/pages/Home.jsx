import MealCategories from "../components/MealCategories";
import MealPlans from "../components/MealPlans";

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Book from the Best Selling Tiffin Plans
      </h1>
      <MealCategories />
      <MealPlans />
    </main>
  );
};

export default Home;
