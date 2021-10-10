import Viz from "./viz.js/viz.es.js";
import { input } from "./viz.js/input.js";
// import { getDigraphs, highlightLine, dehighlightLine } from "./viz.js/utils.js";
import { getDigraphs } from "./viz.js/utils.js";
import { Colors } from "./colors.js";

var viz = new Viz({ workerURL: "./viz.js/full.render.js" });
const { digraphs, lineNos, highlightNodes } = getDigraphs(input);
// const canvas = document.getElementById("canvas");
var canvas;
var highlightLine;

const visualise = async () => {
  let i = 1;
  let lineIdx = 1;
  while (i < digraphs.length) {
    canvas.innerHTML = "";
    let digraph = digraphs[i];
    // dehighlightLine();
    // highlightLine(lineNos[lineIdx]);
    highlightLine?.(lineNos[lineIdx]);
    viz.renderSVGElement(digraph).then(async function (element) {
      canvas.appendChild(element);
    });
    await new Promise((resolve) => setTimeout(resolve, 2500));
    if (digraphs[i + 1] === "highlightNode") {
      canvas.innerHTML = "";
      let coloredDigraph = colorNodes(digraph);
      // dehighlightLine();
      // highlightLine(lineNos[lineIdx + 1]);
      highlightLine?.(lineNos[lineIdx + 1]);
      viz.renderSVGElement(coloredDigraph).then(async function (element) {
        canvas.appendChild(element);
      });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      i++;
    }
    i++;
    lineIdx++;
  }
};

const addHighlightedNodes = (nodeIds) => {
  let res = ``;
  nodeIds.forEach((nodeId) => {
    res += `node${nodeId}[
  color="${Colors.green_1}"
]
`;
  });
  return res;
};

var highlightNodesIdx = 0;
const colorNodes = (digraph) => {
  digraph = digraph.slice(0, -1);
  digraph += addHighlightedNodes(highlightNodes[highlightNodesIdx]) + `}`;
  highlightNodesIdx += 1;
  // console.log(digraph);
  return digraph;
};

const visualiseInitialStack = () => {
  if (lineNos[0] === 0) {
    viz.renderSVGElement(digraphs[0]).then(async function (element) {
      canvas.appendChild(element);
    });
  }
};
visualiseInitialStack();

export const startVisualisation = (canvasRef, setMarker) => {
  // console.log("highlightNodes", highlightNodes);
  canvas = canvasRef.current;
  highlightLine = setMarker;
  if (!canvas) return;
  visualise();
};

// visualise();
