/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const prereqMatrix = new Array(numCourses).fill(null).map(() => new Array(numCourses).fill(false)), validatedCourses = new Array(numCourses).fill(false);
    
    prerequisites.forEach(([a, b]) => prereqMatrix[a][b] = true);
    
    function recValidatePrerequisites(course, visited) {
        if (validatedCourses[course]) {
            // Already validated in a previous recursive call
            return true;
        }

        const me = 1 << course;
        if ((visited & me) === me) {
            // Cycle found
            return false;
        }
        
        let newVisited = visited | me;
        for (let i = 0; i < prereqMatrix[course].length; i++) {
            // If there's prerequisite between courses and it was not validated before => validate it
            if (prereqMatrix[course][i] && !recValidatePrerequisites(i, newVisited)) {
                return false;
            }
        }
        
        // Passed all prerequisites => mark as validated
        validatedCourses[course] = true;
        return true;
    }
    
    for (let i = 0; i < validatedCourses.length; i++) {
        if (!recValidatePrerequisites(i, 0)) {
            return false;
        }
    }
    
    return true;
};
