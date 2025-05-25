/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  if(numCourses < 2) return true;
  
  let nextCourses = Array(numCourses).fill(0).map(item => new Set());
  let dependencyCourses = Array(numCourses).fill(0).map(item => new Set());
  
  for(let [target, pre] of prerequisites) {
    nextCourses[pre].add(target);
    dependencyCourses[target].add(pre);
  }
  let complete = [];
  for (let i = 0; i< dependencyCourses.length; i++) {
    if(dependencyCourses[i].size === 0) {
      complete.push(i);
    }
  }
  let remain_courses = numCourses;
  
  while (remain_courses && complete.length) {
    remain_courses -=  complete.length;
    let newComplete = []
    for(let course of complete) {
      let targets = nextCourses[course];
      
      for(let target of targets) {
        dependencyCourses[target].delete(course);
        if(dependencyCourses[target].size === 0) {
          newComplete.push(target);
        }
      }
    }
    complete = newComplete;
  }
  
  return !remain_courses;
};

const numCourses = 5, prerequisites = [[1,0], [1, 4], [2, 1], [3, 2], [1, 3]]; //true
// const numCourses = 2, prerequisites = [[1,0],[0,1]]; // false
// tslint:disable-next-line:no-console
console.log('canFinish: ', canFinish(numCourses, prerequisites)); // eslint-disable-line no-console
