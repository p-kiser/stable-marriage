function galeShapley(mPrefs, wPrefs) {
    let n = mPrefs.length;
    let freeMen = Array.from({ length: n }, (_, i) => i);
    let engagements = Array(n).fill(null);
    
    while(freeMen.length > 0) {

        let man = freeMen.shift();
        let woman = mPrefs[man].shift();
        console.log(`man ${man} proposes to woman ${woman}.`);

        let fiance = engagements[woman];
        if (fiance == null) {
            console.log(`woman ${woman} is not enaged and accepts the proposal from man ${man}.`);
            engagements[woman] = man;
        } else {
            console.log(`woman ${woman} is already engaged to ${fiance}.`);
            const prefs = wPrefs[woman];
            if (prefs.indexOf(fiance) > prefs.indexOf(man)) {
                console.log(`woman ${woman} prefers man ${man} to her fiance ${fiance}.`);
                console.log(`man ${fiance} is no longer engaged.`);
                engagements[woman] = man;
                freeMen.push(fiance);
            } else {
                console.log(`woman ${woman} is prefers her fiance ${fiance} to man ${man}.`);
                freeMen.push(man);
            }
        }
    }

    console.log("");
    engagements.forEach((man, woman) => {
        console.log(`woman ${woman} marries man ${man}.`);
    });
}

const mPrefs = [
    [1,2,0,3,4,5],
    [0,5,4,2,1,3],
    [5,4,3,2,1,0],
    [1,2,0,5,3,4],
    [0,5,1,2,3,4],
    [1,2,3,4,5,0]
];

const wPrefs = [
    [5,4,2,3,0,1],
    [3,2,1,0,4,5],
    [2,4,5,3,0,1],
    [1,0,4,5,3,2],
    [3,4,5,2,1,0],
    [3,2,4,5,1,0],
];

galeShapley(mPrefs, wPrefs);