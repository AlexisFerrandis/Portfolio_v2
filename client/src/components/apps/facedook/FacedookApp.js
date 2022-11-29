import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import { getUsers } from "./actions/users.actions";
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getUsers());

const FacedookApp = () => {
    return (
        <div className="facebook-app">
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    );
};

export default FacedookApp;


// UNSPLASH
// https://unsplash.com/photos/mEZ3PoFGs_k?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/mEZ3PoFGs_k?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/sLGYaQ_stMM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/sLGYaQ_stMM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/2BJwlRZaR5M?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/2BJwlRZaR5M?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/eSjmZW97cH8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/sRcKPJc81xw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/UT8LMo-wlyk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/0fN7Fxv1eWA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/5psJeebVp9o?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/sf_1ZDA1YFw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

// https://unsplash.com/photos/8Pbw0KxmSKA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/8Pbw0KxmSKA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/vUXKqp1_XqY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/vUXKqp1_XqY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/D72ZlQ6mu-E?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/D72ZlQ6mu-E?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/9XngoIpxcEo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/R5A_YlcSJwA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/R5A_YlcSJwA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/OYzbqk2y26c?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/sf_1ZDA1YFw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/QYBVbwJYxNA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/QYBVbwJYxNA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/pMsvOrnIF3Y?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
