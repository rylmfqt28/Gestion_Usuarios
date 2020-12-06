package com.thejuniors.gestionusuarios.model;

public class ModifPassword {
    
    private String CI;
    private String password;

    // constructor para modificar la contraseña de un usuario en la BD
    public ModifPassword(String CI, String password){
        this.CI = CI;
        this.password = password;
    }

    public String getCI() {
        return CI;
    }

    public void setCI(String CI) {
        this.CI = CI;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
