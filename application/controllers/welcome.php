<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('welcome_message');
	}

	public function skilltree() {
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
        	} else {
        		$response->error = "USUARIO INCORRECTO";
        	}
		} else {
			$response->error = "FALTA PARAMETRO USER CON EL NICK DEL USUARIO";
		} 
		header('Content-Type: application/json');
        echo json_encode($response);
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */