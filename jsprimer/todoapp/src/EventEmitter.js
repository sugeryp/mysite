export class EventEmitter {
    constructor() {
        //Map managing registered [Event_name, Set(Listener_function)]
        this._listeners = new Map();
    }

    /**
     * register listener_function that is called when destinated Event execute
     * @param {string} type Event_name
     * @param {Funciton} listerner Event_listener
     */
    addEventListener(type, listener) {
        //create Set that is resistered listener_function that is contained destenated Event
        if (!this._listeners.has(type)) {
            this._listeners.set(type, new Set());
        }
        const listenerSet = this._listeners.get(type);
        listenerSet.add(listener);
    }

    /**
     * disptach destinated event
     * @param {string} type Event_name
     */
    emit(type) {
        //call all of listeners_functions that are setted on destenated Event
        const listenerSet = this._listeners.get(type);
        if (!listenerSet) {
            return;
        }
        listenerSet.forEach(listener => {
            listener.call(this);
        });
    }

    /**
     * delete destinated event-registration
     * @param {string} type Event_name
     * @param {Function} listener Event_listener
     */

     removeEventListener(type, listener) {
         //get Set that prpperty value of destenated Event, and delete destenated listener_function
         const listenerSet = this._listeners.get(type);
         if (!listenerSet) {
             return;
         }
         listenerSet.forEach(ownListener => {
             if (ownListener === listener) {
                 listenerSet.delete(listener);
             }
         });
     }
}