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
    propTypes = {
        note: PropTypes.
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
                    You liked this.
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
     *                           调用型
     * ==========================================================
     */
    exampleSetState() {
        this.setState({
            liked: true
        });
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
}

