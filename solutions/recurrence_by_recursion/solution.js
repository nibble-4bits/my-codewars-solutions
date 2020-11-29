function recurrence(base, formula, term) {
  if (term === 1) return base;
  else return recurrence(formula(base), formula, --term);
}