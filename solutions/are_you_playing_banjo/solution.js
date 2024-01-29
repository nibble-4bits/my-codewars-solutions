function areYouPlayingBanjo(name) {
  return /r/i.test(name[0]) ? `${name} plays banjo` : `${name} does not play banjo`;
}