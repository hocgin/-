package in.hocg.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    
    // @formatter:off
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                /*
                  所有请求都需要验证
                  - 按照声明顺序进行匹配
                  - `permitAll()` 表示所有用户都有权访问
                 */
                .authorizeRequests()
                    // 匹配条件，直接通过
                    .antMatchers("/css/**", "/index").permitAll()
                    // 匹配条件，需要拥有 USER 角色
                    .antMatchers("/user/**").hasRole("USER")
                    .anyRequest().authenticated()
                    .and()
                .formLogin()
                    .loginPage("/login").failureUrl("/login-error")
                    .and()
                .logout()
                    .logoutUrl("/logout")
                    .invalidateHttpSession(true)
                    .logoutSuccessUrl("/index")
                    .and()
                .httpBasic();
    }
    // @formatter:on
    
    // @formatter:off
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                .withUser(User.withDefaultPasswordEncoder().username("user").password("password").roles("USER"));
    }
    // @formatter:on
}
