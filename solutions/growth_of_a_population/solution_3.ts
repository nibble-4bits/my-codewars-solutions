export class G964 {
    public static nbYear = (p0, percent, aug, p) => {
        if (p0 >= p) return 0;
        else return 1 + G964.nbYear(p0 + (p0 * percent / 100) + aug, percent, aug, p);
    }
}