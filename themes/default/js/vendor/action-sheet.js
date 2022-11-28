(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ActionSheet = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}

if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)){
    __$styleInject("\r\n.as-container{\r\n    position: absolute;\r\n height: 100% !important;width: 100% !important;    left: 0px;\r\n    top: 0;\r\n    z-index: 999999\r\n}\r\n\r\n.as-cover{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.as-buttons{\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.as-button{\r\n    background: #FFF;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.as-button.as-active{\r\n    opacity: .7;\r\n}\r\n\r\n\r\n@-webkit-keyframes as-easein{\r\n\tfrom { opacity: 0; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n\r\n@keyframes as-easein{\r\n\tfrom { opacity: 0; }\r\n\tto { opacity: 1; }\r\n}\r\n@-webkit-keyframes as-easeout{\r\n\tfrom { opacity: 1; }\r\n\tto { opacity: 0; }\r\n}\r\n@keyframes as-easeout{\r\n\tfrom { opacity: 1; }\r\n\tto { opacity: 0; }\r\n}\r\n\r\n.as-in{\r\n    -webkit-animation: as-easein .30s forwards;\r\n            animation: as-easein .30s forwards;\r\n}\r\n.as-out{\r\n    -webkit-animation: as-easeout .30s forwards;\r\n            animation: as-easeout .30s forwards;\r\n}\r\n\r\n@-webkit-keyframes as-buttons-easein{\r\n\tfrom {\r\n\t\t-webkit-transform: translate(0, 100%) translateZ(0);\r\n\t\t        transform: translate(0, 100%) translateZ(0);\r\n\t}\r\n\tto {\r\n\t\t-webkit-transform: translate(0, 0) translateZ(0);\r\n\t\t        transform: translate(0, 0) translateZ(0);\r\n\t}\r\n}\r\n\r\n@keyframes as-buttons-easein{\r\n\tfrom {\r\n\t\t-webkit-transform: translate(0, 100%) translateZ(0);\r\n\t\t        transform: translate(0, 100%) translateZ(0);\r\n\t}\r\n\tto {\r\n\t\t-webkit-transform: translate(0, 0) translateZ(0);\r\n\t\t        transform: translate(0, 0) translateZ(0);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes as-buttons-easeout{\r\n\tfrom {\r\n\t\t-webkit-transform: translate(0, 0) translateZ(0);\r\n\t\t        transform: translate(0, 0) translateZ(0);\r\n\t}\r\n\tto {\r\n\t\t-webkit-transform: translate(0, 100%) translateZ(0);\r\n\t\t        transform: translate(0, 100%) translateZ(0);\r\n\t}\r\n}\r\n\r\n@keyframes as-buttons-easeout{\r\n\tfrom {\r\n\t\t-webkit-transform: translate(0, 0) translateZ(0);\r\n\t\t        transform: translate(0, 0) translateZ(0);\r\n\t}\r\n\tto {\r\n\t\t-webkit-transform: translate(0, 100%) translateZ(0);\r\n\t\t        transform: translate(0, 100%) translateZ(0);\r\n\t}\r\n}\r\n\r\n.as-in .as-buttons{\r\n    -webkit-animation: as-buttons-easein .30s forwards;\r\n            animation: as-buttons-easein .30s forwards;\r\n}\r\n\r\n.as-out .as-buttons{\r\n    -webkit-animation: as-buttons-easeout .30s forwards;\r\n            animation: as-buttons-easeout .30s forwards;\r\n}", undefined);      
} else {
    __$styleInject("\r\n.as-container{\r\n    position: absolute;\r\n height: 100% !important;width: 47.81vh !important;    left: 0px;\r\n    top: 30px;\r\n    z-index: 999999\r\n}\r\n\r\n.as-cover{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.as-buttons{\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.as-button{\r\n    background: #FFF;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.as-button.as-active{\r\n    opacity: .7;\r\n}\r\n\r\n\r\n@-webkit-keyframes as-easein{\r\n\tfrom { opacity: 0; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n\r\n@keyframes as-easein{\r\n\tfrom { opacity: 0; }\r\n\tto { opacity: 1; }\r\n}\r\n@-webkit-keyframes as-easeout{\r\n\tfrom { opacity: 1; }\r\n\tto { opacity: 0; }\r\n}\r\n@keyframes as-easeout{\r\n\tfrom { opacity: 1; }\r\n\tto { opacity: 0; }\r\n}\r\n\r\n.as-in{\r\n    -webkit-animation: as-easein .30s forwards;\r\n            animation: as-easein .30s forwards;\r\n}\r\n.as-out{\r\n    -webkit-animation: as-easeout .30s forwards;\r\n            animation: as-easeout .30s forwards;\r\n}\r\n\r\n@-webkit-keyframes as-buttons-easein{\r\n\tfrom {\r\n\t\t-webkit-transform: translate(0, 100%) translateZ(0);\r\n\t\t        transform: translate(0, 100%) translateZ(0);\r\n\t}\r\n\tto {\r\n\t\t-webkit-transform: translate(0, 0) translateZ(0);\r\n\t\t        transform: translate(0, 0) translateZ(0);\r\n\t}\r\n}\r\n\r\n@keyframes as-buttons-easein{\r\n\tfrom {\r\n\t\t-webkit-transform: translate(0, 100%) translateZ(0);\r\n\t\t        transform: translate(0, 100%) translateZ(0);\r\n\t}\r\n\tto {\r\n\t\t-webkit-transform: translate(0, 0) translateZ(0);\r\n\t\t        transform: translate(0, 0) translateZ(0);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes as-buttons-easeout{\r\n\tfrom {\r\n\t\t-webkit-transform: translate(0, 0) translateZ(0);\r\n\t\t        transform: translate(0, 0) translateZ(0);\r\n\t}\r\n\tto {\r\n\t\t-webkit-transform: translate(0, 100%) translateZ(0);\r\n\t\t        transform: translate(0, 100%) translateZ(0);\r\n\t}\r\n}\r\n\r\n@keyframes as-buttons-easeout{\r\n\tfrom {\r\n\t\t-webkit-transform: translate(0, 0) translateZ(0);\r\n\t\t        transform: translate(0, 0) translateZ(0);\r\n\t}\r\n\tto {\r\n\t\t-webkit-transform: translate(0, 100%) translateZ(0);\r\n\t\t        transform: translate(0, 100%) translateZ(0);\r\n\t}\r\n}\r\n\r\n.as-in .as-buttons{\r\n    -webkit-animation: as-buttons-easein .30s forwards;\r\n            animation: as-buttons-easein .30s forwards;\r\n}\r\n\r\n.as-out .as-buttons{\r\n    -webkit-animation: as-buttons-easeout .30s forwards;\r\n            animation: as-buttons-easeout .30s forwards;\r\n}", undefined);      
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

function keyValue(args, getter, setter) {
    var attrs = {},
        keys,
        key = args[0],
        value = args[1];

    if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
        attrs = key;
    } else if (args.length === 1) {
        return this[0] ? getter(this[0]) : null;
    } else {
        attrs[key] = value;
    };

    keys = Object.keys(attrs);

    return this.each(function (el) {
        keys.forEach(function (key) {
            setter(el, key, attrs);
        });
    });
};


function tethys(selector, context) {

    var nodes = [];

    if (selector.each && selector.on) {

        return selector;
    } else if (typeof selector === 'string') {
        // html代码或选择器
        if (selector.match(/^[^\b\B]*\</)) {
            // html代码
            nodes = tethys.parseHtml(selector);
        } else {
            // 选择器
            nodes = (context || document).querySelectorAll(selector);
        };
    } else if (Array.isArray(selector) || selector.constructor === NodeList) {
        // 包含节点的数组或NodeList
        nodes = selector;
    } else {
        // 节点
        nodes = [selector];
    };

    // 当Node被appendChild方法添加到其它元素中后，该Node会被从它所在的NodeList中移除
    // 为了避免这种情况，我们要把NodeList转换成包含Node的数组
    nodes = Array.prototype.map.call(nodes, function (n) {
        return n;
    });

    // 给数组添加dom操作方法
    tethys.extend(nodes, tethys.fn);

    return nodes;
};

// 扩展
tethys.extend = function () {
    var args = arguments,
        deep = false,
        dest,
        prop = Array.prototype;

    if (typeof args[0] === 'boolean') {
        deep = prop.shift.call(args);
    };

    dest = prop.shift.call(args);

    prop.forEach.call(args, function (src) {
        Object.keys(src).forEach(function (key) {
            if (deep && _typeof(src[key]) === 'object' && _typeof(dest[key]) === 'object') {
                extend(true, dest[key], src[key]);
            } else if (typeof src[key] !== 'undefined') {
                dest[key] = src[key];
            };
        });
    });
    return dest;
};

// 合并数组
tethys.merge = function (ary1, ary2) {
    (ary2 || []).forEach(function (n) {
        ary1.push(n);
    });
};

// 把html代码转换成NodeList
tethys.parseHtml = function (str) {
    var div = document.createElement('DIV');
    div.innerHTML = str;
    return div.childNodes;
};

// 微型模板
tethys.tpl = function (s, o) {
    var SUBREGEX = /\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g;
    return s.replace ? s.replace(SUBREGEX, function (match, key) {
        return typeof o[key] === 'undefined' ? match : o[key];
    }) : s;
};

// 
tethys.fn = {

    // 遍历
    each: function each(fn) {

        Array.prototype.forEach.call(this || [], fn);

        return this;
    },

    // 绑定事件
    on: function on(events, fn) {

        events = events.split(/\s*\,\s*/);

        return this.each(function (el) {

            fn = fn.bind(el);

            events.forEach(function (event) {
                el.addEventListener(event, fn);
            });
        });
    },

    // 设置css
    // css('color', 'red')
    // css({ color: 'red' })
    css: function css(key, value) {

        var format = function format(key) {
            return key.replace(/(-([a-z]))/g, function (s, s1, s2) {
                return s2.toUpperCase();
            });
        };

        return keyValue.call(this, arguments, function (el) {
            return el.style[format(key)];
        }, function (el, key, attrs) {
            el.style[format(key)] = attrs[key] + '';
        });
    },

    // 设置或者返回属性
    attr: function attr(key, value) {

        return keyValue.call(this, arguments, function (el) {
            return el.getAttribute(key);
        }, function (el, key, attrs) {
            el.setAttribute(key, attrs[key] + '');
        });
    },

    // 检查是否有class
    hasClass: function hasClass(cls) {
        var has = false,
            reg = new RegExp('\\b' + cls + '\\b');

        this.each(function (el) {
            has = has || !!el.className.match(reg);
        });

        return has;
    },

    // 添加class
    addClass: function addClass(cls, type) {
        var reg = new RegExp('\\b' + cls + '\\b');

        // 为所有节点添加或删除class
        return this.each(function (el) {
            var name = el.className;

            if (typeof name !== 'string') return;

            if (type === 'remove') {
                // remove
                if (name.match(reg)) {
                    el.className = name.replace(reg, '');
                }
            } else {
                // add
                if (!name.match(reg)) {
                    el.className += ' ' + cls;
                }
            }
        });
    },

    // 删除class
    removeClass: function removeClass(cls) {
        return this.addClass(cls, 'remove');
    },

    // 设置html
    html: function html(_html) {
        return this.each(function (el) {
            el.innerHTML = _html;
        });
    },

    // 显示
    show: function show() {
        return this.each(function (el) {
            if (el.style.display === 'none') {
                el.style.display = el.getAttribute('o-d') || '';
            };
        });
    },

    // 隐藏
    hide: function hide() {
        return this.each(function (el) {
            if (el.style.display !== 'none') {
                el.setAttribute('o-d', el.style.display);
                el.style.display = 'none';

            };
        });
    },

    // 切换显示隐藏
    toggle: function toggle() {
        return this.each(function (el) {
            var e = $(el);
            e.css("display") == "none" ? e.show() : e.hide();
        });
    },

    // 追加节点
    append: function append(child) {

        var children = tethys(child);

        return this.each(function (el) {
            children.each(function (child, i) {
                el.appendChild(child);
            });
        });
    },

    // 查找
    find: function find(selector) {
        var nodes = [];

        this.each(function (el) {
            tethys(selector, el).each(function (node) {
                nodes.push(node);
            });
        });

        return tethys(nodes);
    }

};


function Tap(el) {
    this.el = (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' ? el : document.getElementById(el);
    this.moved = false; //flags if the finger has moved
    this.startX = 0; //starting x coordinate
    this.startY = 0; //starting y coordinate
    this.hasTouchEventOccured = false; //flag touch event

    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)){
        this.el.addEventListener('touchstart', this, false);       
    } else {
        this.el.addEventListener('touchstart', this, false);
        this.el.addEventListener('mousedown', this, false);        
    }

}

// return true if left click is in the event, handle many browsers
Tap.prototype.leftButton = function (event) {
    // modern & preferred:  MSIE>=9, Firefox(all)
    if ('buttons' in event) {
        // https://developer.mozilla.org/docs/Web/API/MouseEvent/buttons
        return event.buttons === 1;
    } else {
        return 'which' in event ?
        // 'which' is well defined (and doesn't exist on MSIE<=8)
        // https://developer.mozilla.org/docs/Web/API/MouseEvent/which
        event.which === 1 :
        // for MSIE<=8 button is 1=left (0 on all other browsers)
        // https://developer.mozilla.org/docs/Web/API/MouseEvent/button
        event.button === 1;
    }
};

Tap.prototype.start = function (e) {
    if (e.type === 'touchstart') {

        this.hasTouchEventOccured = true;
        this.el.addEventListener('touchmove', this, false);
        this.el.addEventListener('touchend', this, false);
        this.el.addEventListener('touchcancel', this, false);
    } else if (e.type === 'mousedown' && this.leftButton(e)) {

        this.el.addEventListener('mousemove', this, false);
        this.el.addEventListener('mouseup', this, false);
    }

    this.moved = false;
    this.startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    this.startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
};

Tap.prototype.move = function (e) {
    //if finger moves more than 10px flag to cancel
    var x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    var y = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    if (Math.abs(x - this.startX) > 10 || Math.abs(y - this.startY) > 10) {
        this.moved = true;
    }
};

Tap.prototype.end = function (e) {
    var evt;

    this.el.removeEventListener('touchmove', this, false);
    this.el.removeEventListener('touchend', this, false);
    this.el.removeEventListener('touchcancel', this, false);
    this.el.removeEventListener('mouseup', this, false);
    this.el.removeEventListener('mousemove', this, false);

    if (!this.moved) {
        //create custom event
        try {
            evt = new window.CustomEvent('tap', {
                bubbles: true,
                cancelable: true
            });
        } catch (e) {
            evt = document.createEvent('Event');
            evt.initEvent('tap', true, true);
        }

        //prevent touchend from propagating to any parent
        //nodes that may have a tap.js listener attached
        e.stopPropagation();

        // dispatchEvent returns false if any handler calls preventDefault,
        if (!e.target.dispatchEvent(evt)) {
            // in which case we want to prevent clicks from firing.
            e.preventDefault();
        }
    }
};

Tap.prototype.cancel = function () {
    this.hasTouchEventOccured = false;
    this.moved = false;
    this.startX = 0;
    this.startY = 0;
};

Tap.prototype.destroy = function () {
    this.el.removeEventListener('touchstart', this, false);
    this.el.removeEventListener('touchmove', this, false);
    this.el.removeEventListener('touchend', this, false);
    this.el.removeEventListener('touchcancel', this, false);
    this.el.removeEventListener('mousedown', this, false);
    this.el.removeEventListener('mouseup', this, false);
    this.el.removeEventListener('mousemove', this, false);
};

Tap.prototype.handleEvent = function (e) {
    switch (e.type) {
        case 'touchstart':
            this.start(e);break;
        case 'touchmove':
            this.move(e);break;
        case 'touchend':
            this.end(e);break;
        case 'touchcancel':
            this.cancel(e);break;
        case 'mousedown':
            this.start(e);break;
        case 'mouseup':
            this.end(e);break;
        case 'mousemove':
            this.move(e);break;
    }
};

var tpl = '<div class="as-container">\
        <div class="as-cover"></div>\
        <div class="as-buttons"></div>\
    </div>';

var buttonTpl = '<div class="as-button"  data-story-action="{text}">{text}</div>';

var ActionSheet = function ActionSheet(opt) {

    opt = tethys.extend({
        buttons: {},
        inTime: 500,
        outTime: 500
    }, opt);

    this.render().update(opt.buttons);
};

// 绑定点击事件
function bindTapEvent(el, fn) {
    new Tap(el);
    el.addEventListener('tap', fn, false);
}

ActionSheet.prototype = {

    // 初始化渲染
    render: function render() {
        var doc = document.documentElement;

        this.el = tethys(tpl);

        this.el.hide().css({
            width: doc.clientWidth + 'px',
            height: doc.clientHeight + 'px'
        });

        bindTapEvent(this.el.find('.as-cover')[0], this.hide.bind(this));

        tethys('#storyWindow').append(this.el);

        return this;
    },

    show: function show() {
        holdActive = true;
        this.el.show();
        this.el.addClass('as-in');

        setTimeout(function () {
            this.el.removeClass('as-in');
        }.bind(this), 350);

        return this;
    },

    hide: function hide() {
        holdActive = false;
        var video = document.getElementsByClassName("videoStory")[0];
        if($('.videoStory:first').is('img')){
        } else {
            video.play();
        }
        
        this.el.addClass('as-out');

        setTimeout(function () {
            this.el.removeClass('as-out').hide();
        }.bind(this), 300);

        return this;
    },

    // 更新按钮
    update: function update(buttons) {
        var buttonContainer = this.el.find('.as-buttons');

        // 清空按钮容器
        buttonContainer.html('');

        // 遍历创建按钮
        Object.keys(buttons).forEach(function (key) {
            if (key.indexOf(site_lang[285]["text"]) !=-1) {
                var n = buttons[key],
                    btn = tethys(tethys.tpl(buttonTpl, {
                    text: key
                }));
            } else {
                var n = buttons[key],
                    btn = tethys(tethys.tpl(buttonTpl, {
                    text: site_lang[key]["text"]
                }));
            }

            bindTapEvent(btn[0], function (e) {

                e.stopPropagation();
                e.preventDefault();

                if (typeof this.action === 'function') {
                    this.action.call(this.context, e);
                } else if (typeof this.action === 'string') {
                    if (this.action.indexOf("Credits") !=-1) {

                        var data = this.action.split(",");
                        $('[data-story-credits]').text(data[2]);
                        socialStory.updateStoryCredit(data[0],data[1],data[2]);
                        //hide
                        $('.as-container').addClass('as-out');
                        setTimeout(function () {
                             $('.as-container').removeClass('as-out').hide();
                             $('.as-container').remove();
                        }, 350);                        
                        holdActive = false;
                        var video = document.getElementsByClassName("videoStory")[0];
                        if($('.videoStory:first').is('img')){
                        } else {
                            video.play();
                        }                       

                    }
                    //location.href = this.action;
                };
            }.bind({ action: n, context: this }));

            // 触摸反馈
            btn.on('touchstart', function (e) {
                tethys(e.target).addClass('as-active');
            }).on('touchend', function (e) {
                tethys(e.target).removeClass('as-active');
            });

            // 添加到按钮容器
            buttonContainer.append(btn);
        }.bind(this));

        return this;
    }
};

return ActionSheet;

})));