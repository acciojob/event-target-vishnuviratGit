class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
           if(!this.listeners.has(event)){
			   this.listeners.set(event, new Set());
		   }
		   this.listeners.get(event).add(callback);
    }
  
    removeEventListener(event, callback) {
	      if(this.listeners.has(event)){
			  const callbacks=this.listeners.get(event);
			  callbacks.delete(callback);
			  if(callbacks.size===0){
				  this.listeners.delete(event);
			  }
		  }
    }
  
    dispatchEvent(event) {
          if(this.listeners.has(event)){
			   const set=this.listeners.get(event);
			  for(const values of set.values()){
				   values();
			  }
		  }
    }
    
  }
  
