<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Skilltree extends CI_Controller {

	public function index() {
		$this->load->view('student_profile');
	}

	public function error($error_string) {
		$data = array(
			'error_string' => $error_string
		);
		$this->load->view('error', $data);
	}

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
        			$response->attendance_code = $bd_attendance[0]->meta_value;
        			$response->attendance = $this->convert_attendance($response->attendance_code);
        		} else {
        			$response->error = "USUARIO SIN CAMPO ASISTENCIA";
        			$response->error_url = base_url() . "index.php/skilltree/error/".$response->error;	
        		}
        	} else {
        		$response->error = "USUARIO INCORRECTO";
        		$response->error_url = base_url() . "index.php/skilltree/error/".$response->error;
        	}
		} else {
			$response->error = "FALTA PARAMETRO USER CON EL NICK DEL USUARIO";
			$response->error_url = base_url() . "index.php/skilltree/error/".$response->error;
		} 

		$data = array(
		   'response' => $response
		);

		$this->load->view('json_view', $data);
	}

	private function convert_attendance($code_attendance) {
		$attendance_string = "";

		$split = explode("*", $code_attendance);
		$attendance_actual = $split[0];

		$attendances = substr_count($attendance_actual, '1');
		$absence = substr_count($attendance_actual, '0');

		$attendance_string .= $attendances."/".strlen($attendance_actual);

		return $attendance_string;
	}
}