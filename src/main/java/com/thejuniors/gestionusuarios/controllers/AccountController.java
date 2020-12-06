package com.thejuniors.gestionusuarios.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import com.thejuniors.gestionusuarios.services.AccountService;
import com.thejuniors.gestionusuarios.model.Account;
import com.thejuniors.gestionusuarios.model.ModifAccount;
import com.thejuniors.gestionusuarios.model.ModifPassword;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.PUT})
public class AccountController {

    @Autowired
    AccountService accountService;

    // Devuelve la informacion de la cuenta de un usuario por su CI
    @GetMapping(value="/api/accountData/{CI}", produces={"application/json"})
    public List<Account> getAccountData(@PathVariable("CI") String CI){
        return accountService.accountData(CI);
    }

    // Modifica el password de un usuario
    @PutMapping(value="/api/updatePassword", consumes={"application/json"})
    public void setUserPassword(@RequestBody ModifPassword password){
        accountService.updatePassword(password);
    }

    // Modifica la informacion de un usaurio
    @PutMapping(value="/api/updateAccountInfo/{oldCI}", consumes={"application/json"})
    public void setAccountInfo(@PathVariable String oldCI, @RequestBody ModifAccount account){
        accountService.updateAccountInfo(account, oldCI);
    }

}
