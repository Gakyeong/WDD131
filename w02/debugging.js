const PI = 3.14;
let radius = 3;
let area = 0;
area = areaOFCircle(radius)
console.log('area1:',area);
radius = 4;
area = areaOFCircle(radius)
console.log('area2:S', area);
function areaOFCircle(r) {
    return r * r * PI;
}
S