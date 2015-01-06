<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Skilltree extends CI_Controller {

	public function get() {
		$this->load->model('User');

		$response = new stdClass;
		$response->error = "";
		
		if($display_name = $this->input->get('user', TRUE)) {
			$bd_user = $this->User->get_user($display_name);	
			if(isset($bd_user) && isset($bd_user[0])) {
        		//La consulta genero un resultado valido
        		$response->user_id = $bd_user[0]->user_id;
        		$response->display_name = $bd_user[0]->display_name;
        		$response->user_skilltree = $bd_user[0]->meta_value;

        		$bd_attendance = $this->User->get_attendance($display_name);
        		if(isset($bd_attendance) && isset($bd_attendance[0])) {
        			$response->user_attendance = $bd_attendance[0]->meta_value;
        		} else {
        			$response->error = "USUARIO SIN CAMPO ASISTENCIA";	
        		}
        	} else {
        		$response->error = "USUARIO INCORRECTO";
        	}
		} else {
			$response->error = "FALTA PARAMETRO USER CON EL NICK DEL USUARIO";
		} 

		$data = array(
		   'response' => $response
		);

		$this->load->view('json_view', $data);
	}
}