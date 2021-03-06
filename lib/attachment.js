'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventAttachment = exports.Attachment = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(0, _debug2.default)('flowai:attachment');

/**
 * Base class to all attachments
 * @class
 **/

var Attachment = exports.Attachment = function () {

  /**
   * Constructor
   **/
  function Attachment(type, payload) {
    _classCallCheck(this, Attachment);

    if (typeof type !== 'string') {
      throw new _exception2.default("type should be a string.", 'user');
    }

    if ((typeof payload === 'undefined' ? 'undefined' : _typeof(payload)) !== 'object') {
      throw new _exception2.default("payload should be an object.", 'user');
    }

    this.type = type;
    this.payload = payload;
  }

  _createClass(Attachment, null, [{
    key: 'build',
    value: function build(_ref) {
      var type = _ref.type,
          payload = _ref.payload;

      switch (type) {
        case 'event':
          return new EventAttachment(payload.name);
        default:
          return new Attachment(type, payload);
      }
    }
  }]);

  return Attachment;
}();

/**
 * Trigger events
 * @class
 *
 * @example
 * const message = new Message({
 *    attachment: new EventAttachment('BUY')
 * })
 **/


var EventAttachment = exports.EventAttachment = function (_Attachment) {
  _inherits(EventAttachment, _Attachment);

  /**
   * Constructor
   **/
  function EventAttachment(payload) {
    _classCallCheck(this, EventAttachment);

    if (typeof payload !== 'string') {
      throw new _exception2.default("EventAttachment payload should be a string", 'user');
    }

    return _possibleConstructorReturn(this, (EventAttachment.__proto__ || Object.getPrototypeOf(EventAttachment)).call(this, 'event', { name: payload }));
  }

  return EventAttachment;
}(Attachment);