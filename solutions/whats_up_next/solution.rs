fn next_item<T: PartialEq<T> + Copy>(slice: &[T], find: T) -> Option<T> {
    let pos = slice.iter().position(|&v| v == find)?;

    slice.get(pos + 1).copied()
}
