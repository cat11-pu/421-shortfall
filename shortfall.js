// shortfall.js：还差多少、够没够与把一条样本加进组表（基线：一律给零与假）
export function shortOf(count, quota) {
  return 0;
}

export function enoughAt(count, quota) {
  return false;
}

export function addedInto(groups, group, value) {
  return groups;
}
