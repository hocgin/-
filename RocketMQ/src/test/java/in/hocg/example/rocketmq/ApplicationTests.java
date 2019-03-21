package in.hocg.example.rocketmq;

import in.hocg.example.rocketmq.constant.TopicConstant;
import org.apache.rocketmq.spring.core.RocketMQTemplate;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Profile;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplicationTests {
    @Autowired
    private RocketMQTemplate rocketMQTemplate;

    @Test
    public void contextLoads() {
        Message<String> message = MessageBuilder
                .withPayload("Nice")
                .build();
        rocketMQTemplate.sendOneWay(TopicConstant.TEST_TOPIC, message);
    }

}
