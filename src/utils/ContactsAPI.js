import request from "superagent/lib/client";
import AuthStore from "../stores/AuthStore";

export default{
    getContacts: (url)=> {
        return new Promise((resolve, reject)=> {
            request
            .get(url)
            // .set({
            //     'Authorization': 'Bearer' + AuthStore.getJWt()
            // })
            .end((err, response)=> {
                console.log('had :s');
                console.log(AuthStore.getJWt());
                if (err) reject(err);
                console.log('response', response);
                resolve(JSON.parse(response.text));
            })
        });
    },
    getContact: (url)=> {
        return new Promise((resolve, reject)=> {
            request
            .get(url)
            .set('Authorization', 'Bearer ' + AuthStore.getJWt())
            .end((err, response)=> {
                console.log('without "s"');
                if (err) reject(err);
                resolve(JSON.parse(response.text));
            })
        })
    }
}