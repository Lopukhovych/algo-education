/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
  const dist = new Array(k).fill(0);
  
  function dfs(i, zeros) {
    if (cookies.length - i < zeros) {
      return Infinity;
    }
    
    if (i === cookies.length) return Math.max(...dist);
    
    let ans = Infinity;
    
    for (let j = 0; j < dist.length; j++) {
      if (dist[j] === 0) zeros -= 1;
      dist[j] += cookies[i];
      
      ans = Math.min(ans, dfs(i + 1, zeros));
      dist[j] -= cookies[i];
      if (dist[j] === 0) zeros += 1;
    }
    
    return ans;
  }
  
  return dfs(0, k);
};

//Test
// const cookies = [8,15,10,20,8], k = 2
const cookies = [6,1,3,2,2,4,1,2], k = 3

console.log('distributeCookies: ', distributeCookies(cookies, k)); // eslint-disable-line no-console
