std::string bmi(double w, double h)
{
    const double bmi = w / (h * h);
    if (bmi < 18.51) return "Underweight";
    if (bmi < 25.01) return "Normal";
    if (bmi < 30.01) return "Overweight";
    else             return "Obese";
}