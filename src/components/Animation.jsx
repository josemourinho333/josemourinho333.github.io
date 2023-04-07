import React, { useRef, useEffect } from 'react';
import $ from 'jquery';
import DroppingFromSvg from './DroppingFromSvg';

const Animation = () => {
  var mainCircle, smallCircle, width, height, otherRadius, sideCircle1, sideCircle2, speed;

  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

  // requestAnimationFrame polyfill by Erik MÃ¶ller. fixes from Paul Irish and Tino Zijdel

  // MIT license

  (function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
  }());

  var onload = function () {
    // Remove any old canvases
    $("#canvas").remove();
    // Create the canvas
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    document.getElementById("append-here").appendChild(canvas);
    $("#canvas").on("click", function () {
      // switch the colors of the circles
      console.log(mainCircle.fill);
      if (mainCircle.fill == "#000") {
        mainCircle.fill = "#f00";
        smallCircle.fill = "#0f0";
        sideCircle1.fill = "#ff0";
        sideCircle2.fill = "#0ff";
      } else {
        mainCircle.fill = "#000";
        smallCircle.fill = "#000";
        sideCircle1.fill = "#fff";
        sideCircle2.fill = "#fff";
      }
    });

    setupCircles();
    // Start the animation
    window.requestAnimationFrame(update);
  };

  var setupCircles = function () {
    var canvas = document.getElementById("canvas");
    // Make the canvas the size of the screen
    width = document.getElementById("append-here").offsetWidth;
    height = document.getElementById("append-here").offsetHeight;
    canvas.width = width;
    canvas.height = height;
    var ctxt = canvas.getContext('2d');
    ctxt.translate(0.5, 0.5); // This is some kind of hack to speed up rendering a very small bit
    var x = canvas.width / 2,
      radius = Math.min(canvas.height / 6, canvas.width / 6),
      smallRadius = radius / 6;

    // mainCircle and smallCircle are our two circles
    // sideCircle1 and sideCircle2 are used for effect
    // otherRadius affects the length that the drip
    // stays attached
    mainCircle = { 'x': x, 'y': 0, 'radius': radius, 'fill': "#fff" };
    smallCircle = { 'x': x, 'y': radius - smallRadius + 1, 'radius': smallRadius, 'fill': "#fff" };
    otherRadius = radius / 5;
    sideCircle1 = { 'x': 0, 'y': 0, 'radius': otherRadius, 'fill': "#5eead4" };
    sideCircle2 = { 'x': otherRadius * 5, 'y': 0, 'radius': otherRadius, 'fill': "#5eead4" };
    speed = radius / 50;

    updateSideCircles();
    draw(ctxt);
  };

  // called every animation frame to update the objects in the scene
  var update = function () {
    var canvas = document.getElementById("canvas");
    var ctxt = canvas.getContext('2d');

    // The idea here is that the drip falls faster
    // when the connection is thinner
    // But I'm only approximating that
    var angleSide1 = getAngle(smallCircle.x, smallCircle.y, sideCircle1.x, sideCircle1.y),
      angleSide2 = getAngle(smallCircle.x, smallCircle.y, sideCircle2.x, sideCircle2.y),
      connectionAngle = angleSide1 - angleSide2;
    connectionAngle = ((connectionAngle >= 0) ? connectionAngle : connectionAngle + 360) || 0;

    // The 80 degrees here is approximately when the connection is broken
    // OOPS! Magic number! #embarrassed
    if (connectionAngle < 80) {
      // The 1.1 is simulating gravity
      speed = speed * 1.1;
      smallCircle.y += speed;
    } else {
      smallCircle.y += speed * (360 - connectionAngle) / 360;
    }

    // If the drip is off the screen, restart
    if (smallCircle.y - smallCircle.radius > height) {
      smallCircle.y = mainCircle.radius - smallCircle.radius + 1;
      speed = mainCircle.radius / 38;
    }

    updateSideCircles();
    draw(ctxt);
    window.requestAnimationFrame(update);
  };

  // draws a frame of the animation
  var draw = function (ctxt) {
    clearCanvas(ctxt);
    drawCircle(ctxt, mainCircle);
    drawCircle(ctxt, smallCircle);
    drawConnection(ctxt);
  };

  // clears the canvas
  var clearCanvas = function (ctxt) {
    ctxt.clearRect(0, 0, width, height);
  };

  // updates the side circles, which are tangent to the main circles
  // These side circles are used to provide the drip-like effect
  // The geometry behind this is pretty cool.
  // Basically, you take the radius of the new circles,
  // add it to the radius of the old circles, and find
  // the intersections. When circles with that first
  // radius are drawn at the intersections, they will
  // be tangent to both of the old circles. It makes
  // a lot of sense if you think about it.
  // That's your math lesson of the day. 5 cents, please.
  var updateSideCircles = function () {
    var biggerMainCircle = {
      'x': mainCircle.x,
      'y': mainCircle.y,
      'radius': mainCircle.radius + otherRadius
    },
      biggerSmallCircle = {
        'x': smallCircle.x,
        'y': smallCircle.y,
        'radius': smallCircle.radius + otherRadius
      },
      centers = circleIntersection(biggerMainCircle, biggerSmallCircle);
    sideCircle1.x = centers.x1;
    sideCircle1.y = centers.y1;
    sideCircle1.radius = otherRadius;
    sideCircle2.x = centers.x2;
    sideCircle2.y = centers.y2;
    sideCircle2.radius = otherRadius;
  };

  // draws a connection between the circles
  // The polygon comprises the centers of the circles
  // The effect is made by using the side circles to
  // erase part
  var drawConnection = function (ctxt) {
    fillPolygon(ctxt, [{ x: smallCircle.x, y: smallCircle.y },
    { x: sideCircle1.x, y: sideCircle1.y },
    { x: mainCircle.x, y: mainCircle.y },
    { x: sideCircle2.x, y: sideCircle2.y }]);

    drawCircle(ctxt, sideCircle1);
    drawCircle(ctxt, sideCircle2);
  };

  // fills a polygon
  var fillPolygon = function (ctxt, pts) {
    ctxt.fillStyle = "#fff";
    ctxt.beginPath();
    var i = 1,
      length = pts.length,
      pt = pts[0];
    ctxt.moveTo(pt.x, pt.y);
    for (; i < length; i++) {
      pt = pts[i];
      ctxt.lineTo(pt.x, pt.y);
    }
    ctxt.fill();
  };

  // gets the angle of a line in degrees
  // (because I understand degrees, that's why)
  var getAngle = function (x1, y1, x2, y2) {
    var x = x2 - x1,
      y = y2 - y1,
      a = Math.atan2(y, x),
      // a is in radians, so I have to convert to degrees (so I can understand it)
      angle = a * 180 / Math.PI;
    return (angle >= 0) ? angle : angle + 360;
  };

  // finds the points where two circles intersect
  // Equation courtesy of http://www.sonoma.edu/users/w/wilsonst/Papers/Geometry/circles/T11-15/T13.html
  // I'm using it as a compass simulator (cool, right?)
  var circleIntersection = function (c1, c2) {
    var x1 = c1.x,
      x2 = c2.x,
      y1 = c1.y,
      y2 = c2.y,
      r1 = c1.radius,
      r2 = c2.radius,
      d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)),
      intersection_x = (x2 + x1) / 2 + (x2 - x1) * (r1 * r1 - r2 * r2) / (2 * d * d),
      difference_x = (y2 - y1) / (2 * d * d) * Math.sqrt((Math.pow(r1 + r2, 2) - d * d) * (d * d - Math.pow(r1 - r2, 2))),
      intersection_y = (y2 + y1) / 2 + (y2 - y1) * (r1 * r1 - r2 * r2) / (2 * d * d),
      difference_y = (x2 - x1) / (2 * d * d) * Math.sqrt((Math.pow(r1 + r2, 2) - d * d) * (d * d - Math.pow(r1 - r2, 2))),
      point1x = intersection_x + difference_x,
      point2x = intersection_x - difference_x,
      point1y = intersection_y + difference_y,
      point2y = intersection_y - difference_y;
    return { x1: point1x, y1: point1y, x2: point2x, y2: point2y };
  };

  // draws a circle
  // x can be an object with keys 'x', 'y', 'radius', and 'fill'
  var drawCircle = function (ctxt, x, y, radius, color) {
    if (arguments.length == 2) {
      y = x.y;
      radius = x.radius;
      color = x.fill;
      x = x.x;
    }
    if (color !== undefined) {
      ctxt.fillStyle = color;
    }
    ctxt.beginPath();
    ctxt.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctxt.fill();
  };

  useEffect(() => {
    $(onload);
    $(window).resize(setupCircles);
  }, [])


  return (
    <div className="basis-1/2 flex justify-center items-center relative">
      <div className="z-10">
        <DroppingFromSvg height={"250px"} width={"400px"} />
      </div>
      <div className="absolute h-[300px] top-24 left-20" id="append-here">
      </div>
    </div>
  )
}

export default Animation