import request from "superagent";
import PATHS from "../Routing/Paths";
import queryString from 'query-string';


let auth = {
    Accept: "application/json",
    Authorization: localStorage.auth_token,
    "Content-Type": "application/json",
};

class RequestWrapper  {

    auth = {
        Accept: "application/json",
        Authorization: localStorage.auth_token,
        "Content-Type": "application/json",
    };

    get(endpoint, options = {}, fullRequest = false) {
        const url = endpoint + (options.params ? ('?' + queryString.stringify(options.params)) : "");

        this.resetAuth();
        endpoint = getURL(endpoint, options);

        return new Promise((resolve, reject) => request.get(endpoint)
            .query(options.params)
            .set(auth)
            .end((err, res) => {
                if (err) {
                    //console.log("Boohoo!", err);
                    reject(err);
                }
                else{

                    //console.log(options, res);

                    this.cache.set(url, fullRequest ? res : res.body);
                    resolve(this.cache.get(url));
                }

            })
        );

    }

    post(endpoint, data = {}, options = {}) {
        this.resetAuth();
        endpoint = getURL(endpoint, options);
        //console.log("POST", endpoint);
        return new Promise((resolve, reject) => request.post(endpoint)
            .set(this.auth)
            .send(data)
            .end((err, res) => {
                if (err) {
                    reject(err, res);
                }
                resolve(options.fullRequest ? res : res.body);
            })
        );

    }

    put(endpoint, data = {}, options = {}) {
        this.resetAuth();
        endpoint = getURL(endpoint, options);
        //console.log("PUT", endpoint);
        return new Promise((resolve, reject) => request.put(endpoint)
            .set(auth)
            .send(data)
            .end((err, res) => {
                if (err) {
                    reject({error: err, res: res});
                }
                resolve(options.fullRequest ? res : res);
            })
        );

    }

    delete(endpoint, options={}) {

        endpoint = getURL(endpoint, options);
        return new Promise((resolve, reject) => request.delete(endpoint)
            .set(auth)
            .end((err, res) => {
                if (err) {
                    reject(err, res);
                }
                resolve(options.fullRequest ? res : res.body);
            })
        );

    }

    resetAuth(){
        this.auth = {
            Accept: "application/json",
            Authorization: localStorage.auth_token,
            "Content-Type": "application/json",
        };
    }
};

function getURL(endpoint, options = {}) {
    const defaultURLOptions = {
        prefixed: false,
        sanitiseURL: true
    };
    options = {...defaultURLOptions, ...options};
    if(options.sanitiseURL){
        endpoint = sanitiseURL(endpoint);
    }
    if(options.prefixed){
        endpoint = PATHS.api.base_url + PATHS.api.prefix + endpoint
    }
    else{
        endpoint = PATHS.api.base_url + endpoint
    }

    //console.log(endpoint + options.params);

    return endpoint;
}

/**
 * Add slash to front of endpoint if it doesn't have one
 * @param endpoint
 * @returns {*}
 */
function sanitiseURL(endpoint){

    if(endpoint[0] === "/") return endpoint;
    else return "/"+endpoint;
}

export default RequestWrapper;

export let Request = new RequestWrapper();