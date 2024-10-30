actor MealPlan {
  type Meal = {
    id: Nat;
    name: Text;
    price: Float;
  };

  var mealPlans: [Meal] = [
    {id=1; name="Standard Plan"; price=100.0},
    {id=2; name="Premium Plan"; price=200.0},
  ];

  public query func getMealPlans(): async [Meal] {
    return mealPlans;
  }
};