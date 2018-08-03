import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";
import * as size from "./data/size";
import * as type from "./data/type";

const PopularPartProps = {
    /** Define size of PP */
    size: PropTypes.oneOf([size.SMALL, size.DEFAULT, size.LARGE]).isRequired,
    /** Define type of PP */
    type: PropTypes.oneOf([type.DEFAULT]).isRequired,
    /** Define loading state */
    loading: PropTypes.bool,
    /** Content of button */
    children: PropTypes.element.isRequired,

    style: PropTypes.object
};

const DefaultPopularPartProps = {
    size: size.DEFAULT,
    type: type.DEFAULT,
    children: "type in something here"
};

class PopularPart extends PureComponent {
    render() {
       const {} = this.props;
       return (
           <div>
               <div>
                   <image src=""></image>
               </div>
               <div>
                   <div>
                       what you might like
                   </div>
                   <div>
                       <div>
                           the andaman islands
                       </div>
                   </div>
               </div>
           </div>
       );
    }
}

PopularPart.propTypes = PopularPartProps;

PopularPart.defaultProps = DefaultPopularPartProps;

export default PopularPart;