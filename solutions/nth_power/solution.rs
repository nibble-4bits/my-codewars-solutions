fn index(nums: &[u64], n: usize) -> Option<u64> {
    if n >= nums.len() {
        None
    } else {
        Some(nums[n].pow(n as u32))
    }
}
