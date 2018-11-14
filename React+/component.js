'use strict';

/**
 * - 首字母必须大写
 * - 每个组件都有自己的 props, state
 *
 * ====================================================
 * 构造函数/组件挂载前：constructor()/componentWillMount()
 * 顶层父组件 -> 子组件 -> 底层子组件
 *
 * 渲染/挂载后：render()/componentDidMount()
 * 底层子组件 -> 子组件 -> 顶层父组件
 */
class LikeButton extends React.Component {


    // props 初始化方式
    static defaultProps = {
        note: 'props 初始化方式'
    };
    static propTypes = {
        note: PropTypes.string
    };
    /**
     * 1. 构造
     * - super(props) 是必须的
     * @param props
     */
    constructor(props) {
        console.log('1. 构造', 'constructor()');
        super(props);
        this.state = {
            note: 'state 初始化方式',
            liked: false,
            count: 0
        };

        console.log(props, this.state);
    }

    /**
     * 2. 挂载前, render() 之前
     */
    componentWillMount() {
        console.log('2. 挂载前', 'componentWillMount()');
    }

    /**
     * 4. 挂载后, render() 之后
     */
    componentDidMount() {
        console.log('4. 挂载后', 'componentDidMount()');
        setInterval(
            () => this.tick(),
            1000
        );
    }

    /**
     * 3. 渲染
     * - 唯一必需
     * - 最外层必须由一个`html标签`包裹
     * @returns {*}
     */
    render() {
        console.log('3. 渲染', 'render()');
        let content;
        if (this.state.liked) {
            content = (
                <div>
                    <div onClick={this.showAlert}>You liked this.</div>
                    <div onClick={this.showAlert2.bind(this, '1')}>You liked this.</div>
                </div>
            );
            // return React.createElement('div', null, 'You liked this.');
        } else {
            content = (
                <div>
                    <button onClick={() => this.setState({liked: true})}>
                        {this.props.text}
                    </button>
                </div>
            );
        }

        return (
            <div>
                <span>{this.state.count}</span>
                {content}
            </div>
        );
        // return React.createElement( 'button', {onClick: () => this.setState({liked: true})}, 'Like');
    }

    /**
     * ==========================================================
     *                           触发型
     * ==========================================================
     */

    /**
     * @ 组件被移除前触发
     */
    componentWillUnmount() {
        console.log('@ 组件被移除前触发', 'componentWillUnmount()');
    }

    /**
     * @ props 改变后
     */
    componentWillReceiveProps(nextProps) {
        console.log('@ props 改变后', 'componentWillReceiveProps(nextProps)', nextProps);
    }

    /**
     * @ 组件是否重新渲染控制
     * @param nextProps
     * @param nextState
     * @returns {boolean} true 重新渲染, false 不重新渲染
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('@ 组件是否重新渲染控制', 'shouldComponentUpdate(nextProps, nextState)');
        return true;
    }

    /**
     * @ 组件重新渲染触发, 需`shouldComponentUpdate`返回true
     * @param nextProps
     * @param nextState
     */
    componentWillUpdate(nextProps, nextState) {
        console.log('@ 组件重新渲染', 'componentWillUpdate(nextProps, nextState)');
    }

    /**
     * @ 组件更新完毕后
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps, prevState) {
        console.log('@ 组件更新完毕后', 'componentDidUpdate(nextProps, prevState)');
    }

    /**
     * ==========================================================
     *                           React 组件 API
     * ==========================================================
     */
    exampleSetState() {
        // 设置状态 setState(object nextState[, function callback])
        this.setState({
            liked: true
        });

        // 替换属性 replaceState(object nextState[, function callback])
        // 设置属性 setProps(object nextProps[, function callback])
        // 替换属性 replaceProps(object nextProps[, function callback])
        this.replaceProps({
            note: 'replace ~'
        });
        // 强制更新 forceUpdate([function callback])
        // 获取DOM节点 DOMElement findDOMNode()
        // 判断组件挂载状态 bool isMounted()
    }
    /**
     * ==========================================================
     *                           自定义函数
     * ==========================================================
     */

    tick() {
        this.setState({
            count: this.state.count += 1
        });
    }

    showAlert() {
        alert('Hi');
    }

    /**
     *
     * @param val
     * @param e 会在最后
     */
    showAlert2(val, e) {
        console.log(e, val);
    }
}

/**
 * 组件的事件
 * https://www.cnblogs.com/mabylove/p/6873506.html
 */

