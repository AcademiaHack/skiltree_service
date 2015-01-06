<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }
    
    function get_user($display_name) {
        $sql = "SELECT meta_value, display_name, user_id 
                FROM wp_usermeta 
                JOIN wp_users ON wp_users.ID = wp_usermeta.user_id
                WHERE display_name = ? AND meta_key = ?"; 
        
        $query = $this->db->query($sql, array($display_name, 'user_skilltree'));
        return $query->result();
    }

    function get_attendance($display_name) {
                $sql = "SELECT meta_value, display_name, user_id 
                FROM wp_usermeta 
                JOIN wp_users ON wp_users.ID = wp_usermeta.user_id
                WHERE display_name = ? AND meta_key = ?"; 
        
        $query = $this->db->query($sql, array($display_name, 'user_attendance'));
        return $query->result();  
    }

}