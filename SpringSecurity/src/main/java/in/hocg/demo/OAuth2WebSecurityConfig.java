package in.hocg.demo;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@EnableWebSecurity
public class OAuth2WebSecurityConfig extends WebSecurityConfig {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .oauth2Client();
    }
}
