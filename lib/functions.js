// Session Toggle
toggleSession = function(session_variable){
	if(Session.get(session_variable)) {
		Session.set(session_variable, false)
	} else{
		Session.set(session_variable, true)
	}
};