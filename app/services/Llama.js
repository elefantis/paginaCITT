"use strict";

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
var SideNavOpen = false;

var Llama = function () {
  var paramsParse = function paramsParse(params) {
    var output = "",
        counter = 0;

    for (var i in params) {
      output += i + "=" + params[i];

      if (counter < Object.keys(params).length - 1) {
        output += "&";
      }

      counter++;
    }

    return output;
  };

  var post = function post(url, params, encodingType) {
    var FILES = 1,
        DEFAULT = 0;
    var Encondings = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"];
    var _encondingIndex = 0;
    if (encodingType) _encondingIndex = encodingType; // Return a new promise.

    return new Promise(function (resolve, reject) {
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('POST', url, true); // The autorization

      try {
        if (localStorage.getItem("token")) {
          var token = JSON.parse(localStorage.getItem("token")).token;
          req.setRequestHeader('Authorization', token);
        }
      } catch (error) {
        reject(error);
      }

      req.onload = function () {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          var message = "";

          try {
            message = JSON.parse(req.response);
          } catch (error) {
            message = req.response;
          }

          resolve(message);
        } else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          var _message = "";

          try {
            _message = JSON.parse(req.response);
          } catch (error) {
            _message = req.response;
          }

          reject({
            status: req.status,
            message: Error(_message)
          });
        }
      }; // Handle network errors


      req.onerror = function () {
        reject(Error("No es posible conectarse con el servidor, verifique su conexión a internet"));
      };

      if (_encondingIndex == FILES) {
        var formData = new FormData();

        for (var i in params) {
          formData.append(i, params[i]);
        }

        req.send(formData);
      } else {
        // Parse the data 
        params = paramsParse(params); //Send the proper header information along with the request

        req.setRequestHeader('Content-type', Encondings[DEFAULT]); // Make the request

        req.send(params);
      }
    });
  };

  var get = function get(url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = function () {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          var message = "";

          try {
            message = JSON.parse(req.response);
          } catch (error) {
            message = req.response;
          }

          resolve(message);
        } else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          var _message2 = "";

          try {
            _message2 = JSON.parse(req.response).message;
          } catch (error) {
            _message2 = req.response;
          }

          reject({
            status: req.status,
            message: Error(_message2)
          });
        }
      }; // Handle network errors


      req.onerror = function () {
        reject(Error("No es posible conectarse con el servidor, verifique su conexión a internet"));
      }; // Make the request


      req.send();
    });
  };

  return {
    post: post,
    get: get
  };
}();

Llama.changePage = function (page) {
  if (page) {
    var main = document.getElementsByTagName("main")[0];
    Llama.get(Llama.pages[page].template).then(function (result) {
      // Change the URL
      parent.location.hash = page;
      main.innerHTML = result;
      window.scrollTo(0, 0);

      if (Llama.pages[page].controller) {
        Llama.pages[page].controller();
      }
    }).catch(function (error) {
      main.innerHTML = error;
    });
  }
};

Llama.init = function (pages) {
  var optionMenus = document.getElementsByClassName("menu");
  Llama.pages = pages;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var optionMenu = _step.value;
      optionMenu.addEventListener("click", function (e) {
        e.preventDefault();
        var path = optionMenu.getAttribute("href");
        Llama.changePage(path);
        closeNav();
      });
    };

    for (var _iterator = optionMenus[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

Llama.setDefault = function (page) {
  Llama.homePage = page;
  var url = parent.location.hash.split('#')[1];

  if (!url) {
    Llama.changePage(page);
  } else {
    Llama.changePage(url);
  }

  Llama.reloadMenu();
};

window.onhashchange = function () {
  Llama.setDefault(Llama.homePage);
  closeNav();
  Llama.reloadMenu();
};

Llama.reloadMenu = function () {
  var opts = document.getElementsByClassName("opt");
  var url = parent.location.hash.split('#')[1];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = opts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var opt = _step2.value;

      if (opt.getAttribute("href") == url) {
        opt.className += " active";
      } else {
        opt.className = opt.className.replace(" active", "");
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

function btnSideNav() {
  if (SideNavOpen) {
    closeNav();
  } else {
    openNav();
  }
}

closeNav();

function openNav() {
  var sideNav = document.getElementById("sidenav");

  if (sideNav) {
    // sideNav.style.width = "250px";
    sideNav.className = "sidenav";
    var menubars = document.getElementById("menuBars");
    menubars.className = "far fa-window-close bars";
    SideNavOpen = true;
  }
}

function closeNav() {
  var sideNav = document.getElementById("sidenav");

  if (sideNav) {
    sideNav.className = "hsidenav"; // document.getElementById("sidenav").style.width = "0";

    SideNavOpen = false;
    var menubars = document.getElementById("menuBars");
    menubars.className = "fas fa-bars bars";
  }
}