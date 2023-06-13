(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("TowerDefenseSinglePath",
{ "compressionlevel":-1,
 "height":21,
 "infinite":false,
 "layers":[
        {
         "data":[503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503,
            503, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 503,
            503, 93, 242, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 244, 93, 503,
            503, 93, 287, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 289, 93, 503,
            503, 93, 287, 108, 291, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 333, 334, 93, 503,
            503, 93, 287, 108, 289, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 503,
            503, 93, 332, 333, 334, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 503,
            503, 93, 362, 363, 364, 93, 93, 93, 93, 362, 363, 363, 363, 363, 363, 363, 363, 363, 363, 363, 364, 93, 93, 93, 93, 93, 93, 362, 363, 363, 363, 363, 363, 363, 363, 363, 364, 93, 93, 93, 503,
            503, 93, 407, 415, 409, 93, 93, 93, 93, 407, 417, 413, 414, 415, 368, 369, 370, 371, 372, 368, 409, 93, 93, 93, 93, 93, 93, 407, 415, 416, 417, 413, 414, 415, 416, 417, 409, 93, 93, 93, 503,
            503, 93, 407, 370, 409, 93, 93, 93, 93, 407, 372, 411, 453, 453, 453, 453, 453, 453, 410, 413, 409, 93, 93, 93, 93, 93, 93, 407, 370, 411, 453, 453, 453, 453, 410, 372, 409, 93, 93, 93, 503,
            503, 93, 407, 371, 409, 93, 93, 93, 93, 407, 417, 409, 93, 93, 93, 93, 93, 93, 407, 368, 409, 93, 93, 93, 93, 93, 93, 407, 415, 409, 93, 93, 93, 93, 407, 369, 409, 93, 93, 93, 503,
            503, 93, 407, 416, 409, 93, 93, 93, 93, 407, 370, 409, 93, 93, 93, 93, 93, 93, 407, 370, 366, 363, 363, 363, 363, 363, 363, 365, 370, 409, 93, 93, 93, 93, 407, 414, 409, 93, 93, 93, 503,
            503, 93, 407, 371, 409, 93, 93, 93, 93, 407, 415, 409, 93, 93, 93, 93, 93, 93, 407, 415, 416, 417, 368, 370, 371, 372, 370, 368, 415, 409, 93, 93, 93, 93, 407, 369, 409, 93, 93, 93, 503,
            503, 93, 407, 416, 409, 93, 93, 93, 93, 407, 368, 409, 93, 93, 93, 93, 93, 93, 452, 453, 453, 453, 453, 453, 453, 453, 453, 453, 453, 454, 93, 93, 93, 93, 407, 372, 409, 93, 93, 93, 503,
            503, 93, 407, 414, 366, 363, 363, 363, 363, 365, 413, 409, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 407, 417, 409, 93, 93, 93, 503,
            503, 93, 407, 370, 371, 372, 415, 416, 417, 415, 368, 409, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 407, 372, 409, 93, 93, 93, 503,
            503, 93, 452, 453, 453, 453, 453, 453, 453, 453, 453, 454, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 452, 453, 454, 93, 93, 93, 503,
            503, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 242, 243, 243, 243, 244, 93, 93, 503,
            503, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 287, 108, 108, 108, 289, 93, 93, 503,
            503, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 287, 108, 108, 108, 289, 93, 93, 503,
            503, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 287, 108, 108, 108, 289, 93, 93, 503],
         "height":21,
         "id":1,
         "name":"Foundation",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":41,
         "x":0,
         "y":0
        }, 
        {
         "data":[47, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 49,
            92, 96, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 95, 94,
            92, 94, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 94,
            92, 94, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 94,
            92, 94, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 94,
            92, 94, 229, 229, 229, 47, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 50, 94,
            92, 94, 229, 229, 229, 92, 93, 93, 96, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 95, 93, 93, 93, 93, 96, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 95, 93, 94,
            92, 94, 229, 229, 229, 92, 93, 93, 94, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 137, 138, 138, 138, 138, 139, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 92, 93, 94,
            92, 94, 229, 229, 229, 92, 93, 93, 94, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 182, 183, 183, 183, 183, 184, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 93, 94,
            92, 94, 229, 229, 229, 137, 138, 138, 139, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 93, 94,
            92, 94, 229, 229, 229, 182, 183, 183, 184, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 93, 94,
            92, 94, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 93, 94,
            92, 94, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 47, 48, 48, 49, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 93, 94,
            92, 94, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 93, 93, 94, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 47, 48, 146, 590, 229, 229, 229, 229, 92, 93, 94,
            92, 94, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 93, 93, 51, 48, 48, 48, 49, 229, 229, 229, 229, 229, 229, 229, 229, 92, 93, 93, 587, 229, 229, 229, 229, 92, 93, 94,
            92, 94, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 93, 93, 93, 93, 93, 93, 94, 229, 229, 229, 229, 229, 229, 229, 229, 92, 93, 93, 587, 229, 229, 229, 229, 92, 93, 94,
            92, 94, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 92, 93, 93, 93, 93, 93, 93, 51, 48, 48, 48, 48, 48, 48, 48, 48, 50, 93, 93, 587, 229, 229, 229, 229, 92, 93, 94,
            92, 51, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 50, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 587, 229, 229, 229, 591, 54, 93, 94,
            92, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 587, 229, 229, 229, 589, 93, 93, 94,
            92, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 587, 231, 231, 231, 589, 93, 93, 94,
            92, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 587, 231, 231, 231, 589, 93, 93, 94],
         "height":21,
         "id":2,
         "name":"Clouds",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":41,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 658, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 748, 0, 0, 0, 0, 0, 0, 0, 0, 748, 0, 0, 0, 0, 0, 0, 0, 0, 748, 0, 0, 0, 0, 0, 0, 748, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 748, 0, 0, 0, 0, 0, 0, 0, 0, 748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 748, 0, 0, 0, 0, 0, 0, 748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 658, 0, 0, 0, 0, 0],
         "height":21,
         "id":4,
         "name":"WayPoints",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":41,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":5,
         "name":"Object Layer 1",
         "objects":[
                {
                 "height":0,
                 "id":1,
                 "name":"",
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":601.046924658815,
                         "y":57.9547578986726
                        }, 
                        {
                         "x":55.1504954197046,
                         "y":57.9547578986726
                        }, 
                        {
                         "x":55.1504954197046,
                         "y":246.775098149187
                        }, 
                        {
                         "x":169.190502897738,
                         "y":246.775098149187
                        }, 
                        {
                         "x":169.190502897738,
                         "y":134.604598990465
                        }, 
                        {
                         "x":312.207889325107,
                         "y":134.604598990465
                        }, 
                        {
                         "x":312.207889325107,
                         "y":200.037390166386
                        }, 
                        {
                         "x":455.225275752477,
                         "y":200.037390166386
                        }, 
                        {
                         "x":455.225275752477,
                         "y":134.604598990465
                        }, 
                        {
                         "x":568.330529070854,
                         "y":134.604598990465
                        }, 
                        {
                         "x":568.330529070854,
                         "y":361.749859786876
                        }],
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":0,
                 "y":0
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 227, 227, 227, 227, 227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 227, 227, 227, 227, 227, 0, 0, 0, 227, 227, 227, 227, 227, 227, 0, 0, 0, 227, 227, 227, 227, 0, 0, 0, 227, 0, 0, 0,
            0, 0, 0, 0, 0, 227, 227, 227, 227, 0, 0, 0, 227, 227, 227, 227, 227, 227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 227, 227, 227, 0, 0, 0, 227, 0, 0, 0,
            0, 0, 0, 0, 0, 227, 227, 227, 227, 0, 0, 0, 227, 227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 227, 227, 227, 0, 0, 0, 227, 0, 0, 0,
            0, 0, 0, 0, 0, 227, 227, 227, 227, 0, 0, 0, 227, 227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 227, 0, 0, 0, 0, 0, 0, 0, 0, 227, 227, 227, 227, 227, 227, 227, 227, 0, 0, 0, 0, 0, 0, 0, 227, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 227, 0, 0, 0, 0, 0, 0, 0, 0, 227, 227, 227, 227, 227, 227, 227, 227, 0, 0, 0, 0, 0, 0, 0, 227, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":21,
         "id":7,
         "name":"Placement Tiles",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":41,
         "x":0,
         "y":0
        }],
 "nextlayerid":8,
 "nextobjectid":3,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.1",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/..\/..\/Downloads\/cloud_tileset.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.10",
 "width":41
});