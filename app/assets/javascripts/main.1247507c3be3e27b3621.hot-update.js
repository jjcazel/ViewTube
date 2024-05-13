webpackHotUpdate("main",{

/***/ "./frontend/components/video_index/video_index_item.jsx":
/*!**************************************************************!*\
  !*** ./frontend/components/video_index/video_index_item.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _react_time_ago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react_time_ago */ \"./frontend/components/video_index/react_time_ago.js\");\n\n\n\nconst VideoIndexItem = props => {\n  const video = props.video;\n  const user = props.user;\n  const handleClick = () => {\n    props.history.push(`/videos/${video.id}`);\n  };\n  let username;\n  if (user) {\n    username = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, user.first_name, \" \", user.last_name);\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: handleClick,\n    className: \"index-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"video\", {\n    className: \"thumbnail-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"source\", {\n    src: video.videoUrl,\n    type: \"video/mp4\"\n  }), \"Your browser does not support the video tag.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"thumb-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"comment-input-icon-thumb\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-user-circle\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"thumb-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"thumb-title-2\"\n  }, video.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"username\"\n  }, username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"date-index-views-cont\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"date-index\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_time_ago__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    video: video\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"views\"\n  }, video.views, \" views\")))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(VideoIndexItem));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3ZpZGVvX2luZGV4L3ZpZGVvX2luZGV4X2l0ZW0uanN4PzY5ZjUiXSwibmFtZXMiOlsiVmlkZW9JbmRleEl0ZW0iLCJwcm9wcyIsInZpZGVvIiwidXNlciIsImhhbmRsZUNsaWNrIiwiaGlzdG9yeSIsInB1c2giLCJpZCIsInVzZXJuYW1lIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzcmMiLCJ2aWRlb1VybCIsInR5cGUiLCJ0aXRsZSIsIkxhc3RTZWVuIiwidmlld3MiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2dCO0FBQ0Y7QUFFeEMsTUFBTUEsY0FBYyxHQUFJQyxLQUFLLElBQUs7RUFDaEMsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNDLEtBQUs7RUFDekIsTUFBTUMsSUFBSSxHQUFHRixLQUFLLENBQUNFLElBQUk7RUFFdkIsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU07SUFDeEJILEtBQUssQ0FBQ0ksT0FBTyxDQUFDQyxJQUFJLENBQUUsV0FBVUosS0FBSyxDQUFDSyxFQUFHLEVBQUMsQ0FBQztFQUMzQyxDQUFDO0VBRUQsSUFBSUMsUUFBUTtFQUNaLElBQUlMLElBQUksRUFBRTtJQUNSSyxRQUFRLGdCQUNOQyw0Q0FBQSxDQUFBQyxhQUFBLGFBQ0dQLElBQUksQ0FBQ1EsVUFBVSxFQUFDLEdBQUMsRUFBQ1IsSUFBSSxDQUFDUyxTQUN0QixDQUNMO0VBQ0g7RUFFQSxvQkFDRUgsNENBQUEsQ0FBQUMsYUFBQTtJQUFLRyxPQUFPLEVBQUVULFdBQVk7SUFBQ1UsU0FBUyxFQUFDO0VBQVksZ0JBQy9DTCw0Q0FBQSxDQUFBQyxhQUFBO0lBQU9JLFNBQVMsRUFBQztFQUFhLGdCQUM1QkwsNENBQUEsQ0FBQUMsYUFBQTtJQUFRSyxHQUFHLEVBQUViLEtBQUssQ0FBQ2MsUUFBUztJQUFDQyxJQUFJLEVBQUM7RUFBVyxDQUFFLENBQUMsZ0RBRTNDLENBQUMsZUFDUlIsNENBQUEsQ0FBQUMsYUFBQTtJQUFLSSxTQUFTLEVBQUM7RUFBaUIsZ0JBQzlCTCw0Q0FBQSxDQUFBQyxhQUFBO0lBQUtJLFNBQVMsRUFBQztFQUEwQixnQkFDdkNMLDRDQUFBLENBQUFDLGFBQUE7SUFBR0ksU0FBUyxFQUFDO0VBQW9CLENBQUksQ0FDbEMsQ0FBQyxlQUNOTCw0Q0FBQSxDQUFBQyxhQUFBO0lBQVNJLFNBQVMsRUFBQztFQUFZLGdCQUM3QkwsNENBQUEsQ0FBQUMsYUFBQTtJQUFJSSxTQUFTLEVBQUM7RUFBZSxHQUFFWixLQUFLLENBQUNnQixLQUFVLENBQUMsZUFDaERULDRDQUFBLENBQUFDLGFBQUE7SUFBS0ksU0FBUyxFQUFDO0VBQVUsR0FBRU4sUUFBYyxDQUFDLGVBQzFDQyw0Q0FBQSxDQUFBQyxhQUFBO0lBQUtJLFNBQVMsRUFBQztFQUF1QixnQkFDcENMLDRDQUFBLENBQUFDLGFBQUE7SUFBS0ksU0FBUyxFQUFDO0VBQVksZ0JBQUVMLDRDQUFBLENBQUFDLGFBQUEsQ0FBQ1MsdURBQVE7SUFBQ2pCLEtBQUssRUFBRUE7RUFBTSxDQUFFLENBQU8sQ0FBQyxlQUM5RE8sNENBQUEsQ0FBQUMsYUFBQTtJQUFLSSxTQUFTLEVBQUM7RUFBTyxHQUFFWixLQUFLLENBQUNrQixLQUFLLEVBQUMsUUFBVyxDQUM1QyxDQUNFLENBQ04sQ0FDRixDQUFDO0FBRVYsQ0FBQztBQUVjQyw4SEFBVSxDQUFDckIsY0FBYyxDQUFDIiwiZmlsZSI6Ii4vZnJvbnRlbmQvY29tcG9uZW50cy92aWRlb19pbmRleC92aWRlb19pbmRleF9pdGVtLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgTGFzdFNlZW4gZnJvbSBcIi4vcmVhY3RfdGltZV9hZ29cIjtcblxuY29uc3QgVmlkZW9JbmRleEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgdmlkZW8gPSBwcm9wcy52aWRlbztcbiAgY29uc3QgdXNlciA9IHByb3BzLnVzZXI7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgcHJvcHMuaGlzdG9yeS5wdXNoKGAvdmlkZW9zLyR7dmlkZW8uaWR9YCk7XG4gIH07XG5cbiAgbGV0IHVzZXJuYW1lO1xuICBpZiAodXNlcikge1xuICAgIHVzZXJuYW1lID0gKFxuICAgICAgPGgyPlxuICAgICAgICB7dXNlci5maXJzdF9uYW1lfSB7dXNlci5sYXN0X25hbWV9XG4gICAgICA8L2gyPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImluZGV4LWl0ZW1cIj5cbiAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJ0aHVtYm5haWwtMlwiPlxuICAgICAgICA8c291cmNlIHNyYz17dmlkZW8udmlkZW9Vcmx9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxuICAgICAgPC92aWRlbz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1pbnB1dC1pY29uLXRodW1iXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGh1bWItaW5mb1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aHVtYi10aXRsZS0yXCI+e3ZpZGVvLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPnt1c2VybmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtaW5kZXgtdmlld3MtY29udFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLWluZGV4XCI+ezxMYXN0U2VlbiB2aWRlbz17dmlkZW99IC8+fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3c1wiPnt2aWRlby52aWV3c30gdmlld3M8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFZpZGVvSW5kZXhJdGVtKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/components/video_index/video_index_item.jsx\n");

/***/ })

})